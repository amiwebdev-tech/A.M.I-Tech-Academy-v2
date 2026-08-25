import { initializeApp } from
"https://www.gstatic.com/firebase.js/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcYCySRQGErV3rnmK3xYLlFvUg2sSIejM",
  authDomain: "ami-tech-academy.firebaseapp.com",
  projectId: "ami-tech-academy",
  storageBucket: "ami-tech-academy.firebasestorage.app",
  messagingSenderId: "543291694831",
  appId: "1:543291694831:web:7b08ad33e99ee69b16451a",
  measurementId: "G-1ZZCTV5PP8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };