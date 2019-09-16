/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        let mdp = ""
        document.getElementsByTagName("input")[0].addEventListener("input",() => {
            mdp = document.getElementById("pass-one").value;
            console.log(mdp);
            console.log(mdp.length);
            if(mdp.length > 10){
                let arr = mdp[0] + mdp[1] + mdp[2] +mdp[3] + mdp[4] + mdp[5] + mdp[6] + mdp[7]+ mdp[8];
                document.getElementsByTagName("input")[0].setAttribute("disabled","true");
                mdp = document.getElementsByTagName("input")[0].innerHTML = arr;
                console.log(arr);

            }
        });
            
        
    // your code here
})();
