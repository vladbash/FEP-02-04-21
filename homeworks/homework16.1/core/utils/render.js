const renderTemplate = (template, dataObject) => Object
    .keys(dataObject)
    .reduce((acc, key) => {
        return acc.replaceAll(`{{${key}}}`, dataObject[key]);
    }, template);

export default renderTemplate;