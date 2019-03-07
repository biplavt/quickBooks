var jwt = require('jsonwebtoken');
var authTokenFile = require('./../configuration/authentication.config.js');

function token(token) {

	return new Promise(function(resolve, reject) {
		jwt.verify(token, 'sampleSalt',function(err,decoded){
			if(err){
				// console.log(err);
				reject(err);
			}
			if (decoded!=null || decoded.user == authTokenFile.authData){
				// console.log('w true');
				resolve('true');
			}
		});
		
	});
}


module.exports = {
	token
}
