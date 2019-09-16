/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
        if (mdpa != mdpb){
            let tar = document.getElementsByTagName("input")[1];
            tar.setAttribute("class","error")
            console.log(tar)
        }
    })

    // your code here
})();
