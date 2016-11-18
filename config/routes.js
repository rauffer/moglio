var files = require('../controllers/files');


module.exports = function (app) {

  app.post('/document', function(req, res){
  	var result = files.create({});
  	res.json(result);
  	res.end();
  });

  app.get('/document', function(req, res){
  	var result = files.find({});
  	res.json(result);
  	res.end();
  });
  
};