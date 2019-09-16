/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {    
    let element = document.getElementById("source").getAttribute("data-image");
    let att = document.createElement("img");
    att.setAttribute("src",element);
    let tar = document.getElementById("target");
    tar.appendChild(att);
    let prout = document.getElementById("source");
    prout.remove()

    // your code here
})();
