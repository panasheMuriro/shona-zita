const { FIRST_NAMES, SURNAMES } = require('./names');// names generated by puppeteer in ./generateNames.js

/**
 * Methods
 * 1. Get a random first name
 * 2. Get a random surname
 * 3. Get a random full name
 */


function firstName() {
    var firstNameIndex = Math.floor(Math.random()* FIRST_NAMES.length + 1);
    return FIRST_NAMES[firstNameIndex];
}

function surname () {
    var surnameIndex = Math.floor(Math.random()* SURNAMES.length + 1);
    return SURNAMES[surnameIndex];
}

 function fullName() {
    return firstName() + " " + surname(); 
}


function zitaRekutanga(){
    var firstNameIndex = Math.floor(Math.random()* FIRST_NAMES.length + 1);
    return FIRST_NAMES[firstNameIndex];
}

function zitaRekupedzisira () {
    var surnameIndex = Math.floor(Math.random()* SURNAMES.length + 1);
    return SURNAMES[surnameIndex];
}

function zitaRakazara(){
    return firstName() + " " + surname(); 
}

module.exports = {
    firstName,
    surname,
    fullName,
    zitaRekutanga,
    zitaRekupedzisira,
    zitaRakazara
}
