const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const degree = document.getElementById("degree");
const college = document.getElementById("college");
const startingYear= document.getElementById("startingYear");
const passingYear = document.getElementById("passingYear");
const cgpa = document.getElementById("cgpa");
const skills = document.getElementById("skills");
const project = document.getElementById("project");
const description1 = document.getElementById("description1");
const link = document.getElementById("link");
const company = document.getElementById("company");
const designation = document.getElementById("designation");
const duration = document.getElementById("duration");
const description2 = document.getElementById("description2");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields

  const name_resume = document.getElementById("name_resume");
  name_resume.innerHTML = name.value;

  const email_resume = document.getElementById("email_resume");
  email_resume.innerHTML = email.value;

  const phone_resume = document.getElementById("phone_resume");
  phone_resume.innerHTML = phone.value;

  const github_resume = document.getElementById("github_resume");
  github_resume.innerHTML = github.value;

  const linkedin_resume = document.getElementById("linkedin_resume");
  linkedin_resume.innerHTML = linkedin.value;

  const degree_resume = document.getElementById("degree_resume");
  degree_resume.innerHTML = degree.value;

  const college_resume = document.getElementById("college_resume");
  college_resume.innerHTML = college.value;

  const startingYear_resume = document.getElementById("startingYear_resume");
  startingYear_resume.innerHTML = startingYear.value;

  const passingYear_resume = document.getElementById("passingYear_resume");
  passingYear_resume.innerHTML = passingYear.value;

  const cgpa_resume = document.getElementById("cgpa_resume");
  cgpa_resume.innerHTML = cgpa.value;

  const skills_resume = document.getElementById("skills_resume");
  skills_resume.innerHTML = skills.value;

  const project_resume = document.getElementById("project_resume");
  project_resume.innerHTML = project.value;

  const description1_resume = document.getElementById("description1_resume");
  description1_resume.innerHTML = description1.value;

  const link_resume = document.getElementById("link_resume");
  link_resume.innerHTML = link.value;

  const company_resume = document.getElementById("company_resume");
  company_resume.innerHTML = company.value;

  const designation_resume = document.getElementById("designation_resume");
  designation_resume.innerHTML = designation.value;

  const duration_resume = document.getElementById("duration_resume");
  duration_resume.innerHTML = duration.value;

  const description2_resume = document.getElementById("description2_resume");
  description2_resume.innerHTML = description2.value;
  
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}