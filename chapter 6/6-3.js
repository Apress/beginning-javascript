
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let theButton = document.getElementById("myButton");
     theButton.addEventListener("click", handleButtonClick);
     theButton.addEventListener("mouseover", mouseOverEvent)
     theButton.addEventListener("mouseout", mouseOutEvent)
}
function handleButtonClick(){
    console.log("button was clicked")
}

function mouseOverEvent(){
    console.log("mouseOver");
}

function mouseOutEvent(){
    console.log("mouseOut");
}