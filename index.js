import {template} from './templates/index'
import 'bootstrap/dist/css/bootstrap.min.css';


fetch('https://json-server-invoices.herokuapp.com/invoices', { method: 'GET' })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('app').innerHTML = template(data);
    }
);


// document.getElementById('app').innerHTML = template();