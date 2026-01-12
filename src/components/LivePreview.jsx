import { useState } from "react";
import "../styles/preview.css";

export default function LivePreview({ html }) {
  const [deploying, setDeploying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liveUrl, setLiveUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // EMPTY STATE
  if (!html) {
    return (
      <div className="preview-wrapper">
        <h2 className="preview-title">Live Preview</h2>
        <p className="preview-empty">
          Save portfolio details to see preview.
        </p>
      </div>
    );
  }

  /* 📥 DOWNLOAD index.html */
  const downloadCode = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /* 📋 COPY LIVE URL */
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Failed to copy URL ❌");
    }
  };

  /* 🚀 DEPLOY */
  const deployPortfolio = async () => {
    try {
      setDeploying(true);
      setProgress(10);
      setLiveUrl("");

      const interval = setInterval(() => {
        setProgress(p => (p < 90 ? p + 10 : p));
      }, 500);

      const res = await fetch(
        "https://portfolio-backend-pm10.onrender.com/deploy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ html })
        }
      );

      const data = await res.json();
      clearInterval(interval);

      setProgress(100);
      setLiveUrl(data.url);
    } catch (err) {
      console.error("Deploy failed:", err);
      alert("Deployment failed ❌");
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div className="preview-wrapper">
      <h2 className="preview-title">Live Preview</h2>

      {/* 🔒 SANDBOXED IFRAME */}
      <iframe
        title="portfolio-preview"
        srcDoc={html}
        className="preview-iframe"
        sandbox="allow-scripts allow-same-origin allow-popups allow-downloads"
        scrolling="yes"
      />

      {/* ACTION BUTTONS */}
      <div className="preview-actions">
        <button onClick={downloadCode} className="btn secondary">
          Download Code
        </button>

        <button
          onClick={deployPortfolio}
          className="btn primary"
          disabled={deploying}
        >
          {deploying ? "Deploying..." : "Deploy Portfolio"}
        </button>
      </div>

      {/* PROGRESS BAR */}
      {deploying && (
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* LIVE URL */}
      {liveUrl && (
        <div className="live-url-row">
          <p className="live-url">
            Live URL:{" "}
            <a href={liveUrl} target="_blank" rel="noreferrer">
              {liveUrl}
            </a>
          </p>

          <button onClick={copyUrl} className="btn copy-btn">
            {copied ? "Copied!" : "Copy URL"}
          </button>
        </div>
      )}
    </div>
  );
}
