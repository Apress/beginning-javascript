
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let myButton = document.getElementById("myButton");
        myButton.addEventListener("click", onButtonClick);
        myButton.addEventListener("WORLD_ENDING_EVENT", onWorldEnd);
       
}

function onButtonClick(evt){
  let custEvent = new CustomEvent("WORLD_ENDING_EVENT", {
    detail : {message: "And I feel fine"}   
  });

  let myButton = document.getElementById("myButton");
      myButton.dispatchEvent(custEvent);
}

function onWorldEnd(evt){
    console.log(evt);
    console.log(evt.type);
    console.log(evt.detail);
}

