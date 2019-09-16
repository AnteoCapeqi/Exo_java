/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementsByTagName("input")[0].addEventListener("input",() =>{
        let numero_non_visible = 460000000;
        let slider = document.getElementById("slider").value;
        numero_non_visible = slider ;
        let numero_visible = "+" + numero_non_visible;
        console.log(numero_visible)
        document.getElementById("target").innerHTML = numero_visible;
    })
    
    
    // your code here
})();
