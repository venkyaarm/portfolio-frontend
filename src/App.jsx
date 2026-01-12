import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Builder from "./pages/Builder";
import LivePreview from "./components/LivePreview";
import PortfolioCreator from "./components/PortfolioCreator";

import "./index.css";

export default function App() {
  // 🔐 auth/page state
  const [page, setPage] = useState("loading");

  // 📦 portfolio data
  const [portfolio, setPortfolio] = useState(null);

  // 🧠 generated HTML (for live preview + deploy)
  const [html, setHtml] = useState("");

  /* =================================================
     🔑 KEEP USER LOGGED IN ON REFRESH
  ================================================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setPage("main");
      } else {
        setPage("login");
      }
    });

    return () => unsubscribe();
  }, []);

  /* =================================================
     ⏳ LOADING SCREEN
  ================================================= */
  if (page === "loading") {
    return (
      <div style={{ textAlign: "center", marginTop: "40vh" }}>
        Loading...
      </div>
    );
  }

  /* =================================================
     🔐 LOGIN
  ================================================= */
  if (page === "login") {
    return (
      <Login
        goRegister={() => setPage("register")}
        onSuccess={() => setPage("main")}
      />
    );
  }

  /* =================================================
     📝 REGISTER
  ================================================= */
  if (page === "register") {
    return (
      <Register
        goLogin={() => setPage("login")}
        onSuccess={() => setPage("main")}
      />
    );
  }

  /* =================================================
     🚀 MAIN PORTFOLIO CREATOR PAGE
  ================================================= */
  return (
    <div className="main-page">
      <h2>Portfolio Creator</h2>

      {/* 🧱 BUILDER (form → firestore) */}
      <Builder setPortfolio={setPortfolio} />

      {/* 🖥️ LIVE PREVIEW (executes index.html exactly) */}
      <LivePreview html={html} />

      {/* ⚙️ GENERATOR (creates index.html + deploy) */}
      <PortfolioCreator
        portfolio={portfolio}
        setHtml={setHtml}
      />
    </div>
  );
}
