





var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://api.github.com/repos/stormbreaker47/Test-Code");
req.send();

function reqListener() {
  console.log(JSON.parse(this.responseText));
}
