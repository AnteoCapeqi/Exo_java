/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click" , () => {
        fruits.sort();    
        for (let i = -1 ; i < fruits.length ;i++){
            if(fruits[i] == fruits[ i + 1 ]){
                fruits.splice(i,1);
                i= i - 1;
            }
        }
        console.log(fruits)


    })
    // your code here
})();
