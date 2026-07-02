import { auth } from "./firebase.js";

import {
    onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { db } from "./firebase.js";

import {
    collection,
    getDocs
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {

        alert("Please login first");

        window.location.href = "login.html";

        return;
    }

    const adminEmails = [

        "ayomodupeilekoin@gmail.com",

        "modupeilekoin@gmailcom"

    ];

    if (!adminEmails.includes(user.email)) {

        alert(
            "Access Denied. Admins Only."
        );

        window.location.href =
        "dashboard.html";
    }
    
});

const studentsBody = 
document.getElementById("studentsBody");

async function loadStudents() {

    const querySnapshot = 
    await getDocs(collection(db, "users"));

    let html = "";

    let count = 1;

    querySnapshot.forEach((doc) => {

        const student = 
        doc.data();

        html += `
        <tr>
            <td>${count}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
        </tr>
        `;

        count++;

    });

    studentsBody.innerHTML = html;

}

loadStudents();