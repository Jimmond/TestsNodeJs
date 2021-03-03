let con = require('../config/user')
module.exports={
    
    index:function(req, res){
        con.query('SELECT * FROM user', function(err, datos){
            console.log(datos);
        });
        res.render('user/index', { title: 'Users' });
    }
}