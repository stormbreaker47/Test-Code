const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  console.log(this.response);
};
