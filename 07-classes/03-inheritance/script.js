/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal{
        static greeting = "Salut";
        constructor (name){
            super();
            this.name = name;
        }
    }
    class Cat extends Animal{
        static greeting = "Salut";
        constructor (name){
            super();
            this.name = name;
        }
    }
    document.getElementById("run").addEventListener("click",() => {
        let cat = new Cat("Charly");
        let dog = new Dog("Billy");
        console.log(dog.sayHello());
        console.log(cat.sayHello());
    })
    // your code here
})();
