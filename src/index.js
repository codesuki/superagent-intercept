var request = require('superagent');

function Intercept() {
	var callbacks = Array.prototype.slice.call(arguments);
	return function(req) {
		var callback = request.Request.prototype.callback;
		request.Request.prototype.callback = function(err, res) {
			callbacks.forEach(function(e) { e.call(req, err, res); });
			callback.call(req, err, res);
		};
	};
};

module.exports = Intercept;
