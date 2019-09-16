/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let tex = ""
    tex = document.getElementById("target").innerHTML ;
    document.getElementById("target").innerHTML = "";
    let u = tex.split("");
    let ttex = ""
    for (let i = 0 ; i < tex.length ; i++){
        console.log(u);
        setTimeout(
            function (){
                ttex = ttex + u[i];
                document.getElementById("target").innerHTML = ttex;
            },500 + (i*100)
        )
        
    }
    // your code here
})();
