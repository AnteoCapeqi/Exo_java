/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the exisif (agree = "Oui"){}or now.
// You will have time to focus oif (agree = "Oui"){}

(() => {
    var age = prompt("Age?");
    var ville = prompt("Ville?");
    var sexe = prompt("Sexe?");
    alert("Vous etes agé de " + age + " Vous vivez a " + ville + " et vous etes un/une " + sexe );
    var conf = confirm("Vous confirmez?")
    while (conf == false){
        var age = prompt("Age?");
        var ville = prompt("Ville?");
        var sexe = prompt("Sexe?");
        alert("Vous etes agé de " + age + " Vous vivez a " + ville + " et vous etes un/une " + sexe );
        var conf = confirm("Vous confirmez?");
    }
    // your code here
})();
