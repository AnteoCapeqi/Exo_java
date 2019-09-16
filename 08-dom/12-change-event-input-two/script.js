/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementsByTagName("input")[0].addEventListener("input",() => {
        mdp =  document.getElementsByTagName("input")[0].value;
        console.log(mdp)
        let chi = ["0","1","2","3","4","5","6","7","8","9"];
        let ur = 0
        if(mdp.length > 8){
            count = mdp.split('')
            cunt = mdp.length
            console.log(count)
            console.log(cunt)
            for (let i = 0 ; i< cunt;i++){
                if (count[cunt] == chi[i]){
                    console.log(ur)
                    console.log("test")
                    ur++;
                }
            }
            if (ur > 2 ){
                document.getElementById("validity").innerHTML = "Ok"
            }
        }
    })
    // your code here
})();
