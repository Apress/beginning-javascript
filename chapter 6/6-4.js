
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let theButton = document.getElementById("myLink");
     theButton.addEventListener("click", function(evt){
         evt.preventDefault();
         console.log(evt);
         console.log(evt.target);
     });

}

