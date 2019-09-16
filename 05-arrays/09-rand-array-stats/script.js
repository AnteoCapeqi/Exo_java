/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click" , () => {
        let arr = []
        let t = 0
        let fmin = 0
        let fmax = 100
        for (let i = 0 ; i < 10; i++){
            arr.push(Math.floor(Math.random() * 100))
        }
        for (let u = 1 ;  u < arr.length + 1 ; u++ ){
            document.getElementById("n-"+ u).innerHTML = arr[u-1];
        }
        for (let y = 0; y < arr.length ; y++){
            if(fmin < arr[y]){
                fmin = arr[y]
            }
        }
        document.getElementById("max").innerHTML = fmin;
        for (let w = 0 ; w < arr.length ;w++){
            if (fmax > arr[w]){
                fmax = arr[w]
            }
        }
        document.getElementById("min").innerHTML = fmax;
        let fsom = 0 
        for (let t = 0; t < arr.length; t++){
            fsom = fsom + arr[t];
        }
        document.getElementById("sum").innerHTML = fsom;
        let fmoy = 0 
        for (let g = 0; g < arr.length; g++){
            fmoy = fmoy + arr[g];
        }
        fmoy = (fmoy / arr.length)
        document.getElementById("average").innerHTML = fmoy;

    })





    // document.getElementById("target").innerHTML =
    // your code here
})();
