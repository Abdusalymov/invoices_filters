let Handlebars = require('handlebars');

let mainTemplate = document.getElementById('main-template').innerHTML;
let createInvoiceTemplate = document.getElementById('create-invoice-template').innerHTML;
let editTemplate = document.getElementById('edit-template').innerHTML;

export let mainPage = Handlebars.compile(mainTemplate);
export let createIvoicePage = Handlebars.compile(createInvoiceTemplate);
export let editPage = Handlebars.compile(editTemplate);

