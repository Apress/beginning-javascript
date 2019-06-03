function mycount(evt){;
    console.dir(evt);
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#myButton").addEventListener("click", mycount)
});