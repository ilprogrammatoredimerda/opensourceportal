const crypto = require('crypto');

module.exports.validPassword = (user, password) => {
	let currPass = exports.passwordChipher(password);
	return currPass == user.password;
};

module.exports.passwordChipher = (password) => {
	return crypto.createHash('sha256').digest(password).toString('base64');
};

module.exports.getSingleResult = (results) => {
	if (!results || results.size == 0) {
		return 404;
	} else if (results.size > 1) {
		return 400;
	}
	return results[0];
};

module.exports.bufferToBase64 = (obj, prop) => {
	if (obj && obj[prop]) {
		let buf = obj[prop];
		obj[prop] = buf.toString('base64');
	}
}

/**
 *  Route middleware to ensure user is authenticated.
 */
module.exports.ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.send(401);
}

module.exports.getApiBaseUrl = (domain) => {
	return '/api/' + domain + '/';
};
