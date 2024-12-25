// get references to the form and display area
var form = document.getElementById('Resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactno = document.getElementById('contactno').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the reume content dynamiclly
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Contactno:</b><span contenteditable=\"true\"> ").concat(contactno, "</span></p>\n\n    <h3>Education</h3>\n    <p <span contenteditable=\"true\"><b>Education:</b> ").concat(education, "</span></p>\n\n    <h3>Experience</h3>\n    <p <span contenteditable=\"true\"><b>Experience:</b> ").concat(experience, "</span></p>\n    \n    <h3>Skills</h3>\n    <p <span contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</span></p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
