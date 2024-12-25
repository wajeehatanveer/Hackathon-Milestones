// get references to the form and display area

const resumeform = document.getElementById('Resume-form') as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
resumeform.addEventListener('submit' , (event: Event) => {
    event.preventDefault(); //prevent page reload


// collect input values

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contactno = (document.getElementById('contactno') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value




    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Contactno:</b> ${contactno}</p>
    
    <h3>Education</h3>
    <p><b>Education:</b> ${education}</p>

    <h3>Experience</h3>
    <p><b>Experience:</b> ${experience}</p>
    
    <h3>Skills</h3>
    <p><b>Skills:</b> ${skills}</p>
    `;

    //Display the generated resume

    if(ResumeDisplayElement){
        ResumeDisplayElement.innerHTML= resumeHTML;
    }else {
        console.error('The resume display element is missing')
    }


})