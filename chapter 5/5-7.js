function sayHello(message) {
    console.log(message, this.mainCharacter)
}

const  characters = {
    mainCharacter: "Elliot"
}

sayHello.call(characters, "Hello ")