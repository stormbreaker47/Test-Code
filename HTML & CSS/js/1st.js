


const div = document.getElementById("myDiv");
const span = document.getElementById("mySpan");

const changeColor = (event) => {
  event.target.style.backgroundColor = `rgb(${Math.random() * 256},${
    Math.random() * 256
  },${Math.random() * 256})`;
};

const removeColor = (event) => {
  event.target.style.backgroundColor = "";
};

div.addEventListener("mouseover", changeColor);
span.addEventListener("mouseover", changeColor);
div.addEventListener("mouseout", removeColor);
span.addEventListener("mouseout", removeColor);


document.addEventListener("dblclick", () => {
    const promptInput = promt("enter text");
    const newSpanElement = document.body.appendChild(
        document.createElement("span"));
});

document.querySelector("h1").addEventListener("click", (event) => {
    console.log("h1 is clicked");
    span.innerText = `location of clicked x = ${event.clientX} and y = ${event.clientY}`
});

const textArea = document.querySelector("Area")
textArea.addEventListener("input", (event) => {
    // console.log("textArea");
    console.log("textArea.value.length")
});
console.log("textArea")


const input = document.querySelector("#numberInput");
console.log(input)
input.addEventListener("input", (event) => {
    if (input.value)
        span.innerText = `Bin =>0b${Number(input.value).toString(2)}
    oct = 0${Number(input.value).toString(8)}
    Hex => 0x${Number(input.value).toString(16).toLocaleUpperCase()}
    `;
    else span.innerText = "";

});


function fullScreen()  {
    console.log("fullScreen")
    document.documentElement.requestFullscreen();
}
function exitFullScreen() {
    console.log("exitFullScreen")
    document.exitFullscreen();
}

document.documentElement.addEventListener("keypress", () => {
    if (event.key = " " && event.code == "space"){
    alert("thank you")
    window.close()
    } else alert("invalid press key")
    
});




// div.addEventListener("mouseover", () => {
//   console.log("over the div");
//   div.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${
//     Math.random() * 256
//   })`;
// });

// span.addEventListener("mouseover", () => {
//   console.log("over the span");
//   span.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${
//     Math.random() * 256
//   })`;
// });


// div.addEventListener("mouseout", () => {
//     div.style.color = "Black"
// });
// span.addEventListener("mouseout", () => {
//     span.style.color = "Black"
// });


