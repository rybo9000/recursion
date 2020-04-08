/*

What is the input to the program?

The input to the program is the base and exponent variables which are integers

What is the output of the program?

The output of the program is a a console.log stating the value of the base raised to
the power of the compnent 

What is the input to each recursive call?

The input to each recursive call is the function with the exponent - 1

What is the output of each recursive call?

The output of each recursive call is the current base * exponent

*/

function powerCalculator(base, exponent) {
    
    if(exponent < 0) {
        return 'exponent should be >= 0'
    }
    
    if(exponent === 0) {
        return 1
    }
    return base * (powerCalculator(base, exponent -1))
}

console.log(powerCalculator(10, -2));