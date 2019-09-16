/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
    
    
    for (let i = 0 ;i < 10 ; i++){
        
    }
    for (let i = 0; i < 11 ;i++ ){
        y = document.getElementsByTagName("table")[0];
        a = document.createElement("tr")
        y.appendChild(a);
        for (u = 0; u < 10 ; u++){
            y = document.getElementsByTagName("tr")[i];
            b = document.createElement("td");
            y.appendChild(b);
            calc = i * u ;
            culc = i + " * " + u;
            tcal = culc + " = " + calc
            let f = document.getElementsByTagName("td")[(i*10)+ u].innerHTML = tcal
        }
    }

    //Calul des tables
    // for (let at = 0 ;at < 10 ; at++){
    //     for (let ut = 0 ; ut < 10; ut++){
    //         calc = at     + ut;
    //         culc = at + " + " + ut;
    //         tcal = culc + " = " + calc;
            
    //     }
    // }
    // your code here
})();
