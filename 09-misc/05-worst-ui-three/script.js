/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let actif = false;
    let a = 0 
    function counta (master_count,count,coeficient){
        master_count = master_count + (1 * coeficient);
        document.getElementById("target").innerHTML = master_count
        console.log(master_count);
        count = count + 1;
        console.log(count);
        console.log("merde")
        return count
    }
    function verification (actif){
        if(actif === true){
            actif = false;
            
        }else {
            actif = true;
        }
        return actif
    }
    function temp (master_count,count,coeficient,actif){
        if(actif === true){
            var time = setInterval(counta(master_count,count,coeficient),1000);
            console.log(actif)
            console.log("Actif");
            
        }else{
            //stop()
            clearInterval(time);
            console.log("Stoppé");
        }
        
        function stop (){
            clearInterval(time);
            console.log("han ouais")
        }
    }
    document.getElementById("fix-part-one").addEventListener("click",() => {
        var master_count = parseInt(document.getElementById("target").innerHTML);
        var count_a = parseInt(document.getElementById("part-one").value);
        console.log(count_a)
        var coeficient = 1000000 ;
        actif = verification(actif);
        count_a = temp(master_count,count_a,coeficient,actif)
        document.getElementById("part-one").innerHTML = count_a;
        
        
    })
    // your code here
})();
