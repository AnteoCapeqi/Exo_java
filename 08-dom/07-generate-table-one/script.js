/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let x = document.createElement("table");
    let a = document.createElement("tr");
    let b = document.createElement("td");
    let y = document.getElementById("target");
    y.appendChild(x);
    y = document.getElementById("target").lastChild;
    y.appendChild(a);
    y = document.getElementsByTagName("tr")[0];
    for (let i = 0 ;i < 10 ; i++){
        y.appendChild(b);
        y = document.getElementsByTagName("tr")[0];
        b = document.createElement("td");
    }

    
    

    // your code here
})();
