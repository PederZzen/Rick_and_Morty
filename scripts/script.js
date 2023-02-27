var url = "https://rickandmortyapi.com/api/character";
const output = document.querySelector(".main-page-container");

function listData(list) {
    output.innerHTML = "";

    for (let item of list) {
        console.log(item);
        output.innerHTML += `
        <a href="./details.html?id=${item.id}" class="main-page-cards">
            <img src="${item.image}" id="thumbnail">
            <div>
                <p>${item.name}</p>
                <p>${item.status}</p>
            </div> 
        </a>`
    }
}

fetch(url)
.then(response => response.json())
.then(list => listData(list.results))
.catch(error => {
    console.error(error);
    output.innerHTML = "Something went wrong...";
});    