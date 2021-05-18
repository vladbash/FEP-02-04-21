// Написать три функции
// Какой длины пользователь хочет (ждем циферку)
// 1 - передаем длину массива в функцию, и заполняем массив цифрами введенными пользователем и возвращаем его
// 2 - отсортируем массив по возрастанию
// 3 - выводим массив с помощью функции

function getNumFromPrompt(message) {
    let num;
    do {
        num = +prompt(message);
    } while(Number.isNaN(num));
    return num;
}

function fillArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = getNumFromPrompt('Put a number');
    }
    return array;
}

function sortArray() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// function printArray(array) {
//     let arrayTemplate = '';
//     for(let i = 0; i < array.length; i++) {
//         arrayTemplate += `${array[i]} `;
//     }
//     console.log(arrayTemplate);
//     alert(arrayTemplate);
// }

// Refactored
function printArray(array) {
    let arrayTemplate = array.join(' ');
    console.log(arrayTemplate);
    alert(arrayTemplate);
}

alert('Hello!');
let length = getNumFromPrompt('Put a length of a new array');

let newArray = fillArray(length);
newArray = sortArray(newArray);
printArray(newArray);
