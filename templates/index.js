let Handlebars = require('handlebars');

let templateScript = document.getElementById('main-template').innerHTML;
export let template = Handlebars.compile(templateScript);