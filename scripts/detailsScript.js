const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id"); 
console.log(id);

const output = document.querySelector("div#characterDetails");

const url = "https://rickandmortyapi.com/api/character/" + id;

fetch (url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      listData(data);
  })
  .catch(error => {
    console.error("Evil Morty has sabotaged this page! Or maybe it was a.. " + error);
    output.innerHTML = "Something went wrong..."
    })
  .finally(document.querySelector("#loadingIcon").style.display = "none");

function listData(data) {
    document.title = data.name;

    output.innerHTML += `
    <div id="info">
        <img src="${data.image}">
        <div>    
            <h1>${data.name}</h1> 
            <h3><strong>${data.species}</strong> (${data.gender})</h3> 
            <h4><span>${data.status}</span></h4> 
            <p><strong>Number of episodes: </strong></br>${data.episode.length}</p> 
            <p><strong>Origin: </strong></br>${data.origin.name}</p> 
            <p><strong>Last Known Location: </strong></br>${data.location.name}</p> 
        </div>
    </div>`;
}