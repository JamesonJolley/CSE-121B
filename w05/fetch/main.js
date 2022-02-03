// main.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  const display = `<ul>
  <li>name: ${results.name}</li>
  <li>type: ${results.types[0].type.name}</li>
  <li>abilities: ${results.abilities[0].ability.name}, ${results.abilities[1].ability.name}</li>
</ul>`
  document.querySelector('#output').innerHTML = display
}
// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
fetch(url).then(convertToJson).then(doStuff);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);
