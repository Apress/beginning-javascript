class Robot{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.greeting = function(){
            return "My name is " + this.name + " I'm a " + this.type + ".";
        }
    }
    
}


class BendingUnit extends Robot{
    constructor(name, type){
        super(name, type);
    }

}