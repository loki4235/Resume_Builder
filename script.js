document.getElementById("resumeForm").addEventListener("submit", function(event) {

event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;

const email = document.getElementById("email").value;
    const phone = document.getElementById
("phone").value;
    const objective = document.getElementById("objective").value;
    const education = 
document.getElementById("education").value;
    const experience = document.getElementById
("experience").value;

    // Generate resume HTML
    const resumeHTML = `
        <h2>${name}</h2>

<p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Objective</h3>
        <p>${objective}</p>

      <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>

   `;

    // Display generated resume
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
});
