import { checkUserCredentials } from './api.js';

const render = (template, dataObject) => Object
    .keys(dataObject)
    .reduce((acc, key) => {
        return acc.replaceAll(`{{${key}}}`, dataObject[key]);
    }, template);

export default render;