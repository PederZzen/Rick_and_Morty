const url = "https://rickandmortyapi.com/api/character/";
const output = document.querySelector(".container");

const lastPage = document.querySelector("#lastPage");
const nextPage = document.querySelector("#nextPage");

function listData(list) {
    console.log(list.length);

    output.innerHTML = "";

    for (let item of list) {
        console.log(item);
        output.innerHTML += `
        <a href="./details.html?id=${item.id}">
            <img src="${item.image}" id="thumbnail">
            <div>
                <p>${item.name}</p>
                <p>${item.origin.name}</p>
            </div>
        </a>`
    }
}


fetch(url)
.then(response => response.json())
.then(list => listData(list.results))
.catch(error => {
    console.error(error)
    output.innerHTML = "Something went wrong..." 
});