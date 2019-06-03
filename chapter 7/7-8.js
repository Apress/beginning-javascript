

const threeArray = ["One", "Two","Three"]

for(let i = 0; threeArray.length > i; i++){
    console.log(threeArray[i]);
}

threeArray.map((value, index, arr) => {
    console.log(value);
});