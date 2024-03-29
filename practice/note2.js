
const resumeData = {
    name: "sathis",
    title: " developer",
    contact: "12345678990",
    mailID: "sathish@123456",
    location: "tambaram",

    summary: "Dedicated and results-oriented Software Engineer with 2 years of experience in developing scalable and efficient software solutions. Proficient in full-stack development, with expertise in JavaScript, React, Node.js, and MongoDB. Strong problem-solving skills and a passion for creating innovative applications that meet user needs",
    skils: "JavaScript Python Java",
    experience:{
    title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
        location: "chennai",
        dates: "2019 - 2022",
      description:
            "Developed and maintained multiple web applications for clients using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget"
    },
    

    educationDetails: {
        education: "Be mech",
        year: "2016 - 2019",
        location: "thiruvanchey",
        pincode: "234678"
    },
    languages: "tamil, english"
    
}; 

console.log("Iterating using for loop:");
for (let key in resumeData) {
  console.log(key, resumeData[key]);
}
