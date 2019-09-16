/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let one = new Number(document.getElementById("op-one").value);    
        let two = new Number(document.getElementById("op-two").value);
        switch(operation){
            case "addition":
                alert(one + two)
                break
            case "substraction":
                alert(one - two)
                break
            case "multiplication":
                alert(one * two)
                break
            case "division":
                alert(one / two)
                break
        }
        
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();