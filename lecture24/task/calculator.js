let result = 0;

export const setInitial = e => {
    result = e;
};

export const add = e => {
    result += e;
};

export const subtract = e => {
    result -= e;
};

export const divide = e => {
    result /= e;
};

export const multiply = e => {
    result *= e;
};

export const getResult = () => {
    return result;
};