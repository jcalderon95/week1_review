import Person from "./modules/DataObject.js"

// IIFE - Immefiately Invoced Function Expression
(() => {
    console.log('fired');

    console.log(Person);

    debugger;
})();