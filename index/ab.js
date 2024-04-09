





var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
  console.log(JSON.parse(this.responseText));
}
const asianCountries = data.filter((country) => country.region === "Asia");
console.log(asianCountries);