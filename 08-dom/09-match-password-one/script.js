/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        mdpa = document.getElementById("pass-one").value;
        mdpb = document.getElementById("pass-two").value;
        console.log(mdpa);
        console.log(mdpb);
        if (mdpa == mdpb){
            let tar = document.getElementById("pass-two");
            tar.style.backgroundColor = "green" ;
        }else {
            let tar = document.getElementById("pass-two");
            tar.style.backgroundColor = "red" ;
        }
    })
    // your code here
})();
