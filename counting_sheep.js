/*

What is the input to the program?

The input to the program is the number variable which is an integer.

What is the output of the program?

The output of the program is a a console.log stating the sheep number

What is the input to each recursive call?

The input to each recursive call is the function with the number decremented by 1

What is the output of each recursive call?

The output of each recursive call is one less sheep than before

*/

function sheepJumper(number) {
    
    if(number === 0) {
        return console.log('All sheep jumped over the fence.')
    }
    
    console.log(number + ': Another sheep jumps over the fence')
    sheepJumper(number - 1)

}

sheepJumper(5);