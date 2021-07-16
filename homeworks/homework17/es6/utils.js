let history = [];

const pushToHistory = (func, args, result) => {
    history.push(`[${new Date().toTimeString()}] [${func}] with args ${args.join(',')} and had result ${result}`);
};

// Type 1
// const removeDuplicates = str => {
//     const result = {};
//     str.split('').forEach(e => {
//         result[e] = '';
//     });
//     let resultStr = '';
//     for(let key in result) {
//         resultStr += key;
//     }
//     return resultStr;
// };

// Type 2
// const removeDuplicates = str => {
//     console.log('Type 2');
//     const result = {};
//     str.split('').forEach(e => {
//         result[e] = '';
//     });
//     return Object.keys(result).join('');
// };

// Type 3
const removeDuplicates = (str, ...args) => {
    console.log('Type 3');
    console.log('args: ', args);
    const result = Array.from(new Set(str.split(''))).join('');
    // pushToHistory('removeDuplicates', Array.from(arguments), result);
    return result;
};

const removeForbiddenWords = (str, word) => str
    .replaceAll(word, ' ')
    .split(' ')
    .filter(e => e)
    .join(' ');

const getHistory = () => {
    return history;
};

export {
    removeDuplicates,
    getHistory,
    removeForbiddenWords
};