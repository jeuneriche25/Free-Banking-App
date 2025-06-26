// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDKdvr4KDS8mr1DnlHyBssI1DUQTpUV0Lc",

  authDomain: "free-banking-app-ab631.firebaseapp.com",

  projectId: "free-banking-app-ab631",

  storageBucket: "free-banking-app-ab631.appspot.com",

  messagingSenderId: "18517611434",

  appId: "1:18517611434:web:9fd45a3448794b03ac11d3",

  measurementId: "G-ZQT6Q6EJHT"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
