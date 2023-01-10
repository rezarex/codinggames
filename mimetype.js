/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let map = {
    UNKNOWN: 'UNKNOWN'
};
let result = '';

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    //map[inputs[0].toLowerCase()] = inputs[1]; // file extension : MIME type
    map[EXT.toLowerCase()] = MT
}
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    fname = (FNAME.indexOf('.') != -1 ? FNAME.split('.') : 'UNKNOWN')
    result += (map[fname[fname.length-1].toLowerCase()] || 'UNKNOWN') +'\n'
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
console.log(result);