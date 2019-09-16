/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {document.getElementById("run").addEventListener("click" ,() => { 
    let testdate = Date.now();
    let d = document.getElementById("dob-day").value;
    let m = document.getElementById("dob-month").value;
    let y = document.getElementById("dob-year").value;
    let indat = (y +"-"+ m +"-"+ d);
    let date1 = new Date(indat)
    let dat = date1.getTime();
    let result = (testdate - dat );
    let show = Math.floor(result / (1000 * 60 * 60 * 24 * 365 )); 
    alert("Vous etes agé de " + show + " ans")
})
    // your code here
})();
