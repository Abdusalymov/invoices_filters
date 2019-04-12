import $ from 'jquery';
import { 
    mainPage 
} from '../templates/index';
const api =  {
    getInvoices: ()=> {
        $.ajax({
            url: 'https://json-server-invoices.herokuapp.com/invoices',
            type: "GET",
            error: function(){
                console.error('fail get invoices');
            },
            success: function(data){
                app.innerHTML = mainPage(data)
            },
        });
    },

    deleteInvoice: (id) => {
        $.ajax({
            url: `https://json-server-invoices.herokuapp.com/invoices/${id}`,
            type: "DELETE",
            error: function(){
                console.error('fail delete invoice');
            },
            success: function(){
                alert("Invoices was deleted!")
               api.getInvoices(mainPage);
            },
        });
        
    },

    editInvoice: id => {
        $.ajax({
            url: `https://json-server-invoices.herokuapp.com/invoices/${id}`,
            type: "PUT",
            data: $("#editForm").serialize(), 
            error: function(){
                console.error('fail dit invoice');
            },
            success: function(){
                $('#editForm')[0].reset();
                alert('edited successfully!')
            },
        });
    },

    createInvoice: () => {
        $.post(
            "https://json-server-invoices.herokuapp.com/invoices", 
            $("#myForm").serialize(),         
            function() {
                $('#myForm')[0].reset();
                alert("Invoices added successfully!"); 
            }
        );
            return false;
    },
    getInvoicesByFilter: (text) => {
        $.ajax({
            url: `https://json-server-invoices.herokuapp.com/invoices?q=${text}`,
            type: "GET",
            error: function(){
                console.error('fail get invoices');
            },
            success: function(data){
                console.log(data);
                app.innerHTML = mainPage(data)
            },
        });
    }
}

export default api;