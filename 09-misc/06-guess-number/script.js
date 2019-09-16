/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var chiffres = Math.floor(Math.random() * 100)
    test = prompt("Entrez un chiffres");
    while (chiffres != test) {
        if (test < chiffres){
            alert("Tu vise trop bas mec");
        }else{
            alert("Wow Wow Wow Doucement vise plus bas");
        }
        test = prompt("Nope Try again");
        if (chiffres == test){
            alert("Nice bien trouvé");}

    }
    
    // your code here
})();
