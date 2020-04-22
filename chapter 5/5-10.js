function sayHello(firstName, lastName) {
    
    let msg = "Greetings ";
     function intro(){
        return msg + firstName + " " + lastName;     

    }
    return intro();
}

console.log(sayHello("Professor", "Falken"));