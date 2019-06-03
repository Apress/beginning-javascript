
let jsonResults;
function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => saveData(json))
}

function saveData(json){
    jsonResults = json;
    console.log(jsonResults);
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#myButton").addEventListener("click", getData);
});