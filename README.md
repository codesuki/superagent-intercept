# superagent-intercept
Add interceptors that will be called during end() e.g. for handling error conditions without having the same code all over the place.

## Install
```
npm install superagent-intercept
```

## Example
```javascript
let AuthIntercept = require('superagent-intercept')((err, res) => {
	if (res.status == 401) {
	   // route to login
	}
});

request.get('/api/something/' + artistId).use(AuthIntercept).end((err, res) {
	// AuthIntercept will be called here.
	// ... code ...
});
```