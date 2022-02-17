const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id"); 
console.log(id);

const status = document.querySelector("p#out");
const output = document.querySelector("div#rickAndMorty");

const url = "https://rickandmortyapi.com/api/character/" + id;

fetch (url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      listData(data);
  })
  .catch(error => console.error("Error: " + error))
  .finally(document.querySelector("#loadingIcon").style.display = "none");

function listData(data) {

    document.title = data.name;

    output.innerHTML += `
    <div id="info">
    <img src="${data.image}">
        <div>
            <h1>${data.name}</h1> 
            <p>${data.gender} (${data.species})</p> 
            <p>${data.status}</p> 
            <p><strong>Origin: </strong>${data.origin.name}</p> 
            <p><strong>Last Known Location: </strong>${data.location.name}</p> 
        </div>
    </div>`;
}