


const Robot = function (name, type){
    this.name = name;
    this.type = type;
}

Robot.prototype.greeting = function(){
    return "My name is " + this.name + " I'm a " + this.type + ".";
}


