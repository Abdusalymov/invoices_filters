let Router = require('vanilla-router');

let router = new Router({
    mode: 'hash',
    root: '/index.html',
    hooks: {
        before: function (newPage) {
            console.info('Before page loads hook', newPage);
        }
    },
    page404: function (path) {
        console.log('"/' + path + '" Page not found');
        let html = errorTemplate();
        el.html(html);
    }
});
export default router;