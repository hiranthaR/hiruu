var user = require('../mongo_models/user');

module.exports = function(app){
    app.post('/login-validate', function(req, res) {
        
        
        var itemOne = user({username : req.body.username}).save(function(err){
          if(err) throw err;
          res.send('saved!');
        })

    });
}