const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    const arrBin = []

    for (let i = 0; i < expr.length; i += 10) {
        arrBin.push(expr.substring(i, i + 10))
    }

    for (let i = 0; i < arrBin.length; i++){
        let morse = "";
        for (let j = 0; j < arrBin[i].length; j = j + 2) {
            if (arrBin[i][0] === '*') {
                morse += ' ';
                break
            }
            if (arrBin[i][j] === '1' && arrBin[i][j + 1] === '0') {
                morse += ".";
            } else if (arrBin[i][j] === '1' && arrBin[i][j + 1] === '1') {
                morse += "-";
            }
        }

        res += ((morse === ' ') ? ' ' : MORSE_TABLE[morse])
    }
    
    console.log(res);
    return res
}

module.exports = {
    decode
}