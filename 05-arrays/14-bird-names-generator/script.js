/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById("run").addEventListener("click" , () => {
        let cname = (Math.floor(Math.random() * 12));
        let cadj = (Math.floor(Math.random() * 11));
        let name = birds[cname];
        console.log(name)
        let adj = Array.from(adjectives)
        let tadj = adj[cadj]
        console.log(tadj)
        console.log(name.fem)
        if (name.fem == true){
            oname = name.name;
            tname = ("La " + oname + " " + tadj + "e" )
            document.getElementById('target').innerHTML = tname
        }else{
            oname = name.name;
            tname =("Le " + oname + " " + tadj)  
            document.getElementById('target').innerHTML = tname
        }

    })

    // your code here
})();
