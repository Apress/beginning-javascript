

(function (){
    var person = "Friend";
    console.log(this);
    console.log("Hello " + this.person);
    console.log("Hello " + person);
})()

console.log("Hello " + person);