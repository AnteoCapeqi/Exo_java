/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // let truarr = Array();
        // let numbers = Array(document.getElementById('numbers').value.split(",").parseInt());
        // arr = numbers;
        // console.log(arr);
        // for(let i = 0; i < arr.length; i++){
        //     let o = 0;
        //     for(let u = 0; u < arr.length; u++){
        //             if (arr[i] > arr[u]){
        //                 o++;
        //                 console.log(o); 
        //             }
        //     }
        //     console.log(o);
        //     truarr[o].push(arr[i]);
        //     console.log(truarr[o]);
        // }
        // alert(truarr)
        document.getElementById("run").addEventListener("click", () => { 
            numbers = document.getElementById("numbers") 
            .value 
            .split(",") 
            .map(Number) 
            .sort((a, b) => a - b)
            alert(numbers); })

        
        
        
        
        
        
        // your code here
    });
})();
