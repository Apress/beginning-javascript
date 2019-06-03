function mycount(evt){
    console.dirxml(document);
    console.dir(document);
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#myButton").addEventListener("click", mycount)
});