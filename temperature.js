/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

let result = 0
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
   
    if(result===0){
        result = t
    } else if(t > 0 && t <= Math.abs(result)){
        result = t
    } else if(t < 0 && -t  < Math.abs(result)){
        result = t
    }
    


    


}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);