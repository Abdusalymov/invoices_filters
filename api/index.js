import $ from 'jquery';

const api =  {
    getInvoices: mainPage => {
        $.ajax({
            url: 'https://json-server-invoices.herokuapp.com/db',
            type: "GET",
            error: function(){
                console.error('fail get invoices');
            },
            success: function(data){
                app.innerHTML = mainPage(data)
            },
        });
    },

    deleteInvoice: (mainPage, id) => {
        $.ajax({
            url: `https://json-server-invoices.herokuapp.com/invoices/${id}`,
            type: "DELETE",
            error: function(){
                console.error('fail delete invoice');
            },
            success: function(){
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
    }
}

export default api;