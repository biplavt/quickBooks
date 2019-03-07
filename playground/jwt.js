var jwt = require('jsonwebtoken');
var authTokenFile = require('./../configuration/authentication.config.js');

var token = jwt.sign(authTokenFile.authData, 'sampleSalt');
console.log('token:',token);

jwt.verify(token, 'sampleSalt',function(err,decoded){
			if(err){
				console.log(err);
				// reject(err);
			}
			if (decoded!=null || decoded.user == authTokenFile.authData){
				console.log(decoded);
				// resolve('true');
			}
		});