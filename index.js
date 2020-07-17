const restify = require('restify');
const server = restify.createServer({
    name : 'server Web API',
    version : '1.0.0'
})

global.config = require('./config/connection');

server.get('/api/example' , (req, res) => {
    res.send(200, {
        data: {
            name: 'Rachmat',
            alamat: 'Bekasi',
            umur:'29',
            email:'rachm@gmail.com'
        }
    })
})

require('./service/CategoryService')(server, global.config.pool);

server.listen(3500, function () {
    console.log(server.name + ' is running........');
})