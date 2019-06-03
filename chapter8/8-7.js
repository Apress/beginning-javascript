
let jsonResults;
function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => saveData(json))
}

function saveData(json){
    jsonResults = json;
    jsonResults.map((value, index, arr) => {
        console.log(value);
        console.log(index);
        console.log(arr);
        console.log(checkIndex(index));
    });
    console.log(jsonResults);
}

function checkIndex(indexNum){
   
    if(indexNum % 2 === 0){
        return true;
    }else{
        return false;
    }
}





document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#myButton").addEventListener("click", getData);
});