const twoArray = ["One", "Two"]
const threeArray = Object.assign([...twoArray], {2:"Three"});
console.log(threeArray); //returns (3) ["One", "Two", "Three"]

console.log(...threeArray);