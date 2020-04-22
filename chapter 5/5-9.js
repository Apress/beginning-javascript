function sayHello(firstName, secondName, thirdName) {
    console.log(this.message, firstName);
    console.log(this.message, secondName);
    console.log(this.message, thirdName);
}

const  show = {
    message: "Hello"
}

sayHello.apply(show, ["Elliot ","Tyrell ", "Dominique "])