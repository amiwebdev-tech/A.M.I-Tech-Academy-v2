import { db } from "./firebase.js";

import {
    collection,
    getDocs
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const coursesContainer = 
document.getElementById("coursesContainer");

async function loadCourses() {

    const querySnapshot = 
    await getDocs(collection(db, "Courses"));

    let html = "";

    querySnapshot.forEach((doc) => {

        console.log(doc.data());

        const course = doc.data();

        html += `
        <div class="course-card">
        
          <img src="${course.image}"
        alt="${course.title}">
        
         <div class="course-content">
         
             <span class="course-tag">
                 ${course.level}
            </span>
        
        <h3>${course.title}</h3>
        
        <p>${course.description}</p>
        
        <div class="course-info">
            <span>${course.duration}</span>
            <span>${course.student}</span>
        </div>
        
        <a href="learning.html">
            <button
            class="enroll-btn"
            data-course="${course.title}">
            Enroll Now
            </button>
        </a>

    </div>
    
</div>
`;
        
    });
    coursesContainer.innerHTML = html;  
}

loadCourses();

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("enroll-btn")) {

        const courseName =
        e.target.dataset.course;

        localStorage.setItem(
            "selectedCourse",
          courseName
        );

        window.location.href =
        "learning.html";
    }
})