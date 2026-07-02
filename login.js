import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

window.onload = () => {

    const loginForm = 
    document.querySelector(".login-form");

    loginForm.addEventListener("submit",

        async (e) => {

            e.preventDefault();

        const email = 
        document.getElementById("login-email").value;

        const password =
        document.getElementById("login-password").value;

        try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

            alert("Login Successful!");

            window.location.href =
            "dashboard.html";

        }

        catch(error){

            alert(error.message);

        }

    });

};