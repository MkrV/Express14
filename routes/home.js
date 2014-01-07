module.exports = function (app) {

    // 1
    app.get('/', function (req, res) {
        res.render('index', { title: 'slider1' })
    });

    // 2
    app.get('/2', function (req, res) {
        res.render('2', { title: 'slider2' })
    });

}
