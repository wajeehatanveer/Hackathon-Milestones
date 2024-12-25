// get references to the form and display area
var resumeform = document.getElementById('Resume-form');
var ResumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactno = document.getElementById('contactno').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Contactno:</b> ").concat(contactno, "</p>\n    \n    <h3>Education</h3>\n    <p><b>Education:</b> ").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience:</b> ").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
