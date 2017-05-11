const crypto = require('crypto');

exports.validPassword = (user, password) => {
	let currPass = exports.passwordChipher(password);
	return currPass == user.password;
};

exports.passwordChipher = (password) => {
	return crypto.createHash('sha256').digest(password).toString('base64');
};

exports.getSingleResult = (results) => {
	if (!results || results.size == 0) {
		return 404;
	} else if (results.size > 1) {
		return 400;
	}
	return results[0];
};

exports.bufferToBase64 = (obj, prop) => {
	if (obj && obj[prop]) {
		let buf = obj[prop];
		obj[prop] = buf.toString('base64');
	}
}

/**
 *  Route middleware to ensure user is authenticated.
 */
exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.send(401);
}
