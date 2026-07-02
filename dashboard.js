import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { db } from "./firebase.js";

import {
    doc, 
    getDoc
} 
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const auth = getAuth();

onAuthStateChanged(auth, async (user) => {

    if (user) {

        const docRef = 
        doc(db, "users", user.uid);

        const docSnap = 
        await getDoc(docRef);

        if (docSnap.exists()) {

            const data =
            docSnap.data();

            document.getElementById("studentName")
            .textContent = data.name;

            document.getElementById("profileName")
            .textContent = data.name;
        }
    }
});