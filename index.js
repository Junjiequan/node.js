// OOP? 
let isBoring = false;

class Person{
    constructor(name, hobby , skills){
        this.name = name;
        this.hobby = hobby;
        this.skills = skills;
    }
    getInfo(location){
        !isBoring
        ?console.log(`I am ${this.name}. My hobbies are ${this.hobby.join(', ')}. 
Most of my spare times, I prefer to stay at ${location[1]} alone and sometimes I ${this.hobby[2]} but mostly I ${this.hobby[1]}.
Other than ${this.hobby[1]}, my another passion is ${this.hobby[0]}, I do weight lifting at ${location[0]} on a daily basis.
My current coding skills are ${this.skills[0]}, ${this.skills[1]} and ${this.skills[2]}.
        `)
        :'';
    }
}
const jay = new Person('jay',);
jay.hobby = ['weight lifting', 'coding', 'gaming'];
jay.skills =['html', 'css', 'javascript'];
jay.getInfo(['gym','home']);