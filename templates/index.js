let Handlebars = require('handlebars');

// export var book = { bookTitle: '2001: A Space Odyssey', bookAuthor: 'Arthur Clarke' };

// var templateScript = $('#main-template').html();
let templateScript = document.getElementById('main-template').innerHTML;

export let template = Handlebars.compile(templateScript);


// // import Handlebars from 'handlebars';
// require('handlebars');
// import $ from 'jquery';
// // var book = { bookTitle: '2001: A Space Odyssey', bookAuthor: 'Arthur Clarke' };

// // Получаем шаблон
// var templateScript = $('#main-template').html();

// // Функция Handlebars.compile принимает шаблон и возвращает новую функцию
// var template = Handlebars.compile(templateScript);

// // Формируем HTML и вставляем в документ
// // $('#app').append(template(book));

// export default template;