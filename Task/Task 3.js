
// 


const resumeData = {
  name: "sathis",
  title: " developer",
  contact: "12345678990",
  mailID: "sathish@123456",
  location: "tambaram",

  summary:
    "Dedicated and results-oriented Software Engineer with 2 years of experience in developing scalable and efficient software solutions. Proficient in full-stack development, with expertise in JavaScript, React, Node.js, and MongoDB. Strong problem-solving skills and a passion for creating innovative applications that meet user needs",
  skils: "JavaScript Python Java",
  experience: {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "chennai",
    dates: "2019 - 2022",
    description:
      "Developed and maintained multiple web applications for clients using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget",
  },

  educationDetails: {
    education: "Be mech",
    year: "2016 - 2019",
    location: "thiruvanchey",
    pincode: "234678",
  },
  languages: "tamil, english",
};

console.log("Iterating using for loop:");
for (let key in resumeData) {
  console.log(key, resumeData[key]);
}



//  difference between window , screen , document in javascript.

// 1. Window

// (i) The window object is the top-level object in the browser's JavaScript object model (DOM). It represents the browser window or tab where your web page is displayed.
// (ii) It acts as the global object in client-side JavaScript, meaning that variables and functions defined directly in the global scope are properties and methods of the window object.

// 2. screen

//(i) It provides information such as the screen's width, height, pixel depth, and whether it is in portrait or landscape orientation.
//(ii) Developers commonly use screen properties to adjust the layout or behavior of their web pages based on the user's screen resolution or capabilities.

// 3. document

// (i) It provides access to the structure and content of the web page, allowing JavaScript code to manipulate the DOM (Document Object Model) dynamically.
// (ii) document allows you to select and modify HTML elements, create new elements, handle events, and perform various other operations related to document structure and content.


