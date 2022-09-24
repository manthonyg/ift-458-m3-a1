import fetch from "node-fetch";

const apiUrl = "https://swapi.dev/api/people";

fetch(apiUrl)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

console.log("getting data");
