function performOperation() {
    debugger;
    // Get the user input from fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //perform the operation
            let result = multipliy_add_divide(num1, num2);

            //display The result
            displayResult(result);
    } else {
            displayResult('please enter valid numbers');
     }
    }

    function multipliy_add_divide(a, b) {
        //Introduction a debugger statement to pause execution

        //Multibly the numbers 
        let x = a + b;
        let y = x * a;
        let z = Math.ceil(x / y);
        return z;
    }

    function displayResult(result) {
        //Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`
    }