// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Retrieve form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;

        // Generate the resume HTML
        const resumeContent = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Insert the resume HTML into the resumeOutput div
        const outputDiv = document.getElementById("resumeOutput");
        outputDiv.innerHTML = resumeContent;
    });
});
