/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("target").innerHTML = "Cette phrase me saoule";
    let ajj = document.getElementById("target");
    let manip = document.getElementById("target").innerHTML;
    document.getElementsByTagName("body")[0].addEventListener("click",() =>{
        for (let i = 0 ; i < manip.length;i++){
            let p = document.createElement("span");
            p.innerHTML = manip[i];
            ajj.appendChild(p);
            setTimeout(
                function () {
                    document.getElementById("target").getElementsByTagName("span")[i].style.fontSize = "xx-large";
                },500 + (i*100));
                setTimeout(
                    function () {
                        document.getElementById("target").getElementsByTagName("span")[i].style.fontSize = "medium";
                    },800 + (i*100));
        }
    })
    
    // your code here
})();
