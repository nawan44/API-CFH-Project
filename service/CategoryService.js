module.exports = exports = (server, pool) => {
    server.get('api/allDataCategory', (req, res) => {
        
        const query = 'SELECT * FROM "Category"';

        pool.query(query,(error, result)=>{
            if(error){
                res.send(400, {
                    success : false,
                    result:error
                })
            }
            else {
                res.send(200,{
                    success : true,
                    result : result.rows
                })
            }
        })


    })
}