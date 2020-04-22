const sayHello = function () {
    let greetingMsg = "Greetings ";

    function msgTo(firstName, lastName){
        greetingMsg = greetingMsg + firstName + " " + lastName;
    }

    return {
         sendGreeting: function(firstName, lastName){
            msgTo(firstName, lastName);
        },
        getMsg: function(){
            return greetingMsg;
        }
    }

}

const createMsg = sayHello();
createMsg.sendGreeting("Professor", "Falken");
console.log(createMsg.getMsg());

const createMsg2 = sayHello();
createMsg2.sendGreeting("David", "Lightman");
console.log(createMsg2.getMsg());