var url = "https://rickandmortyapi.com/api/character";
const output = document.querySelector(".container");

const lastPage = document.querySelector("#lastPage");
const nextPage = document.querySelector("#nextPage");

const listData = (list) => {

    console.log(list.length);

    output.innerHTML = "";
    
    for (let item of list) {
        let newDiv = `
            <a href="#">
                <img src="${item.image}" id="thumbnail">
            </a>`
        output.innerHTML += newDiv;  
    }
}

fetch(url)
.then(response => response.json())
.then(list => listData(list.results))
.catch(error => {
    console.error(error)
    output.innerHTML = "Something went wrong..." 
});