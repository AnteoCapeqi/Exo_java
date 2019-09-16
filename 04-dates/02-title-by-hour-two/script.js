/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let d = new Date('December 17, 1995 17:41:00');
    let u = d.getHours();
    let y = d.getMinutes();
    console.log(y)
    console.log(u)
    if ( u <= 18 ){
        if (u = 18 && y < 30 ){
            let val = " Bonjour"
            document.getElementById("target").innerHTML = val
        }else if(u < 18){
            let val = " Bonjour"
            document.getElementById("target").innerHTML = val    
        }
    } else{
        let val = " Bonsoir"
        document.getElementById("target").innerHTML = val
    }
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
