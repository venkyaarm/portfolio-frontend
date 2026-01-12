import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb8-3uhia9WnbMOlEHYCD4Npc4YgI8h78",
  authDomain: "portfolio-creator-aa71c.firebaseapp.com",
  projectId: "portfolio-creator-aa71c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
