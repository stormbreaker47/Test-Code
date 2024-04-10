
// common use 

< !DOCTYPE html >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="Task 5.js"></script>
</body>
            </html>
            


// Get all the countries from Asia continent /region using Filter function
// a.

var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data = JSON.parse(this.responseText);
   const asianCountries = data.filter((country) => country.region === "Asia");
   const asianCountryNames = asianCountries.map(
     (country) => country.name.common
   );
   console.log(asianCountryNames);
    
};

// Get all the countries with a population of less than 2 lakhs using Filter function
// b.

var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data = JSON.parse(this.responseText);
   const countriesWithLessPopulation = data.filter((country) => {
      if (country.population < 200000) {
        return true;
      } else {
        return false;
      }
    });
    console.log(countriesWithLessPopulation);
};


// Print the following details name, capital, flag, using forEach function
// c.

var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data = JSON.parse(this.responseText);
    data.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : "N/A";
        const flag = country.flags.png;
         
    
        console.log("Name:", name);
        console.log("Capital:", capital);
        console.log("Flag:", flag);
    });
}; 
        
// Print the total population of countries using reduce function
// d.


var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data = JSON.parse(this.responseText);
const totalPopulation = data.reduce((acc, country) => {
        if (country.population) {
            return acc + country.population;
        } else {
            return acc;
        }
    }, 0);


    console.log("Total population using reduce function:", totalPopulation);
};



// Print the country that uses US dollars as currency.
// e.
var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data = JSON.parse(this.responseText);
    const usDollarCurrencies = data.filter((country) => {
        return country.currencies && country.currencies.USD;
    });

    usDollarCurrencies.forEach((country) => {
        console.log(country.name.common);

    });
    
};


