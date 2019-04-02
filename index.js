import $ from 'jquery';
import {template} from './templates/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './route/index';
let app = document.getElementById('app')

fetch('https://json-server-invoices.herokuapp.com/db', { method: 'GET' })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        app.innerHTML = template(data);
    }
);

// let router = new Router({
//     mode: 'hash',
//     root: '/index.html',
//     hooks: {
//         before: function (newPage) {
//             console.info('Before page loads hook', newPage);
//         }
//     },
//     page404: function (path) {
//         console.log('"/' + path + '" Page not found');
//         let html = errorTemplate();
//         el.html(html);
//     }
// });

router
      .add('', function () {
          console.log('Home page!!!!');
          // app.innerHTML = 
          // let html = mainTemplate();
          // el.html(html);
          // $.getInvoices();

      })
      .add('create', function () {
          console.log('----create Invoice page!!!!----');
          // let html = createInvoiceTemplate();
          // el.html(html);
      })
      .check()
      .addUriListener()
      .refresh();

      $('a').on('click', function(event){
          console.log('====event work====')
          // Block browser page load
          event.preventDefault();
          const target = $(event.target);
          // Navigate to clicked url
          const href = target.attr('href');
          router.navigateTo(href);
      });


// window.router = router;