
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let myForm = document.querySelector("form");
        myForm.addEventListener("submit", onSubmit);
       
}

function onSubmit(evt){
    console.log(myForm[1].value);
    console.log("form submitted");
    evt.preventDefault();
}
