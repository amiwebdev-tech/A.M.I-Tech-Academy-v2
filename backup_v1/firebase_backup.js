import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcYCySRQGErV3rnmK3xYLlFvUg2sSIejM",
  authDomain: "ami-tech-academy.firebaseapp.com",
  projectId: "ami-tech-academy",
  storageBucket: "ami-tech-academy.firebasestorage.app",
  messagingSenderId: "543291694831",
  appId: "1:543291694831:web:7b08ad33e99ee69b16451a",
  measurementId: "G-1ZZCTV5PP8"
};

import {
  getFirestore
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = 
initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };