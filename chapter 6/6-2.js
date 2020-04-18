
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let theButton = document.getElementById("myButton");
     theButton.addEventListener("click", handleButtonClick);
}
function handleButtonClick(){
    console.log("button was clicked")
    let theButton = document.getElementById("myButton");
    theButton.removeEventListener("click", handleButtonClick);
}