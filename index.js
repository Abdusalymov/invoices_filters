import $ from 'jquery';
import { 
    mainPage, 
    createIvoicePage, 
    editPage 
} from './templates/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './route/index';
let app = document.getElementById('app');
import api from './api/index';

let number;
let id;

$('#app').on('click','.edit', function(event){
    id = event.target.dataset.id;
    number = event.target.dataset.number;
});


router
    .add('', function () {
        api.getInvoices(mainPage);
    })
    .add('create', function () {
        app.innerHTML = createIvoicePage();
    })
    .add('edit', function () {
        app.innerHTML = editPage({"number": number, "id": id});
    })
    .check()
    .addUriListener()
    .refresh();

    $('#app').on('click','a', function(event){
        event.preventDefault();
        const target = $(event.target);
        const href = target.attr('href');
        router.navigateTo(href);
    });

    $('#app').on('click','.del', function(event){
        const id = event.target.id;
        api.deleteInvoice(mainPage, id);
    });

    $('#app').on('click','#btn-save', function(event){
        event.preventDefault();
        api.createInvoice();
    });

    $('#app').on('click','#btn-save-edit', function(event){
        event.preventDefault();
        const id = event.target.dataset.id;
        api.editInvoice(id)
    });

