function mycount(evt){
    console.count(evt);    
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#myButton").addEventListener("click", mycount)
});