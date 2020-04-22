var myObj = {
    person: "Friend"
}

function sayHello(){
    console.log("Hello " + this.person);
}

sayHello();

var tryAgain = sayHello.bind(myObj);

tryAgain();
