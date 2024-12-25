// get references to the form and display area

const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
form.addEventListener('submit' , (event : Event) => {
    event.preventDefault(); //prevent page reload


// collect input values

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contactno = (document.getElementById('contactno') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value



// generate the reume content dynamiclly
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>

    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Contactno:</b><span contenteditable="true"> ${contactno}</span></p>

    <h3>Education</h3>
    <p contenteditable="true"><b>Education:</b> ${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true"><b>Experience:</b> ${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true"><b>Skills:</b> ${skills}</p>
    `;

    //Display the generated resume

    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML= resumeHTML;
    }else {
        console.error('The resume display element is missing')
    }


})