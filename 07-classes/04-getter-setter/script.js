/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name(){
            return this.firstname + " " + this.lastname
        }
        set fir(fir){
            this.firstname = fir;
        }
        set las(las){
            this.lastname = las;
        }
    }
    document.getElementById("run").addEventListener("click",() => {
        mec = new Person("Anteo","Capeqi");
        console.log(mec.name);
        mec.fir = "Ruben";
        mec.las = "Ribnick";
        console.log(mec.name)
    })
    // your code here
})();
