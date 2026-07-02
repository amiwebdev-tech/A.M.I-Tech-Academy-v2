console.log("REGISTER.JS LOADED");
import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword
}

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { db } from "./firebase.js";

import {
    doc, 
    setDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

 const firebaseConfig = {

  apiKey: "AIzaSyCcYCySRQGErV3rnmK3xYLlFvUg2sSIejM",
  authDomain: "ami-tech-academy.firebaseapp.com",
  projectId: "ami-tech-academy",
  storageBucket: "ami-tech-academy.firebasestorage.app",
  messagingSenderId: "543291694831",
  appId: "1:543291694831:web:7b08ad33e99ee69b16451a",
  measurementId: "G-1ZZCTV5PP8"
  
};

const app = 
initializeApp(firebaseConfig);

const auth = getAuth(app);

const form = 
document.querySelector(".register-form");

console.log("FORM:", form);

form.addEventListener("submit", function(e){

    e.preventDefault();

    console.log("FORM SUBMITTED");

    const name =
    document.querySelector("#name").value;

    const email = 
    document.querySelector("#email").value;

    const password = 
    document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password)

    .then(async (userCredential) => {

        const user = userCredential.user;

        console.log("User created:", user.uid);

        await setDoc(
            doc(db, "users", user.uid),
            {
                name: name,
                email: email
            }
        );

        console.log("User saved to Firestore!")

        alert("Registration Successful!");

        window.location.href = 
        "dashboard.html";

    })

    .catch((error) => {
        console.error("REGISTER ERROR:", error);
        alert(error.message);
    });

});