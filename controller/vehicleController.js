let con = require('../config/conexion')
module.exports={
    
    index:function(req, res){
        con.query('SELECT * FROM vehicle', function(err, datos){
            console.log(datos);
        });
        res.render('vehicle/index', { title: 'Dealer' });
    }
}
