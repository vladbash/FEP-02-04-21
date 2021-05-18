const CHOICE_SORT = 1;
const CHOICE_ODD_EVEN = 2;
const CHOICE_SUM = 3;

function getArrayFromUser(message, separator) {
    if (!separator) {
        separator = ' ';
    }
    const result = prompt(message);

    // DON'T DO THIS
    // const resArray = result.split(separator);
    // for (let i = 0; i < resArray.length; i++) {
    //     resArray[i] = +resArray[i];
    // }

    return result
        .trim()
        .split(separator)
        .map(e => +e)
        .filter(e => !Number.isNaN(e));
}

function getMenuResult() {
    const menu = `
    1 - sort array
    2 - odd/even
    3 - sum, avg ...
    `;
    let userChoice;
    do {
        userChoice = +prompt(menu);
    } while (!userChoice || userChoice > 3 && userChoice < 1);

    return userChoice;
}

function processUserChoice(choice, array) {
    switch (choice) {
        case CHOICE_SORT: break;
        case CHOICE_ODD_EVEN: break;
        case CHOICE_SUM: break;
    }
}