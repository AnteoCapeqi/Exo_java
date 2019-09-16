/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {document.getElementById("run").addEventListener("click" ,() => {
    let year = document.getElementById("year").value ;
    let sy = year ; 
    let sdate = new Date(sy + "-" + 1+ "-" + 1);
    let fdate = new Date((sy + 1) + "-" + 1 + "-" + 1);
    let startdat = sdate.getTime();
    let endat = fdate.getTime();
    console.log(startdat);
    console.log(endat);
    let i = 0;
    let arr = Array()
    while( i < 364) {
        let dd = new Date(startdat)
        let a = dd.getDay();
        let b = dd.getDate();
        let c = dd.getMonth();
        console.log(c)
        startdat = startdat + (1000*60*60*24);
        i= i + 1 ;
        if (a == 5 && b == 13){
            console.log("prout")
            arr.push(c);
        }
        console.log(arr[1])
    }
    alert(arr)


}) 
    // your code here
})();
