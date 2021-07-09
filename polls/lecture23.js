[
    {
        question: `Какой HTTP-метод используется для обноления существующих данных на сервере?`,
        options: {
            0: 'PUT',
            1: 'UPDATE',
            2: 'PUSH',
            3: 'POST',
            4: 'HEAD'
        }
    },
    {
        question: `* Какой будет результат операции?`,
        payload: () => {
            console.log(parseInt('574kfj44')); // -> ? 574
            console.log(Number('574kfj44')); // -> ? NaN
        },
        options: {
            0: NaN,
            1: undefined,
            2: 0,
            3: 574
        }
    },
    {
        question: `В какой последовательности выведутся сообщения?`,
        payload: () => {
            setTimeout(() => console.log('Hello!'), 1000); // 1

            console.log('How are you?'); // 2

            Promise.resolve(`Never better! What about you?`).then(e => console.log(e)); // 3

            setTimeout(() => console.log('Have a nice day!')); // 4
        }
    },
    {
        question: `Что выведется в консоль?`,
        payload: () => {
            console.log(foo());

            !function foo() {
                return 'Hello!';
            }
        },
        options: {
            0: 'Hello!',
            1: 'undefined',
            2: '',
            3: 'Error'
        }
    },
    {
        question: `Какая команда в git отвечает за создание новой ветки?`,
        options: {
            0: 'git create branch branch_name',
            1: 'git commit --branch branch_name',
            2: 'git checkout -b branch_name',
            3: 'git push origin master'
        }
    }
]