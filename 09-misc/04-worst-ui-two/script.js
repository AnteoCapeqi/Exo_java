/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let numero_non_visible = 460000000;
    let count_a = document.getElementById("part-one").innerHTML;
    let count_b = document.getElementById("part-two").innerHTML;
    let count_c = document.getElementById("part-three").innerHTML;
    let count_d = document.getElementById("part-four").innerHTML;
    let tcount_a = parseInt(count_a);
    let tcount_b = parseInt(count_b);
    let tcount_c = parseInt(count_c);
    let tcount_d = parseInt(count_d);
    document.getElementById("part-one").addEventListener("click",()=>{
        tcount_a = tcount_a + 1;
        document.getElementById("part-one").innerHTML = tcount_a;
        numero_non_visible = numero_non_visible + 1000000 ;
        document.getElementById("target").innerHTML = "+" + numero_non_visible;
        if (tcount_a == 500){
            tcount_a = 460;
            document.getElementById("part-one").innerHTML = tcount_a; 
            numero_non_visible = numero_non_visible - 40000000
            document.getElementById("target").innerHTML = "+" + numero_non_visible;
        }
    })
    document.getElementById("part-two").addEventListener("click",()=>{
        tcount_b = tcount_b + 1;
        document.getElementById("part-two").innerHTML = tcount_b;
        numero_non_visible = numero_non_visible + 10000;
        document.getElementById("target").innerHTML = "+" + numero_non_visible;
        if(tcount_b == 99){
            tcount_b = 0;
            document.getElementById("part-two").innerHTML = tcount_b;
            numero_non_visible = numero_non_visible - 990000
            document.getElementById("target").innerHTML = "+" + numero_non_visible;
        }
    })
    document.getElementById("part-three").addEventListener("click",()=>{
        tcount_c = tcount_c + 1;
        document.getElementById("part-three").innerHTML = tcount_c;
        numero_non_visible = numero_non_visible + 100;
        document.getElementById("target").innerHTML = "+" + numero_non_visible;
        if (tcount_c == 99){
            tcount_c = 0 ;
            document.getElementById("part-three").innerHTML = tcount_c;
            numero_non_visible = numero_non_visible - 9900 ; 
            document.getElementById("target").innerHTML = "+" + numero_non_visible;
        }
    })
    document.getElementById("part-four").addEventListener("click",()=>{
        tcount_d = tcount_d + 1;
        document.getElementById("part-four").innerHTML = tcount_d;
        numero_non_visible = numero_non_visible + 1;
        document.getElementById("target").innerHTML = "+" + numero_non_visible;
        if (tcount_d == 99){
            tcount_d = 0 ;
            document.getElementById("part-four").innerHTML = tcount_d;
            numero_non_visible = numero_non_visible - 99 ; 
            document.getElementById("target").innerHTML = "+" + numero_non_visible;
        }
    })


    // your code here
})();
