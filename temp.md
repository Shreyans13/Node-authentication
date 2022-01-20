```
var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/typeahead',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
    'x-rapidapi-key': '0375a38a59msh966907970eb2c09p1fcaf8jsn35c93bc14c01'
  },
  data: {language: 'en_US', q: 'jamshedpur'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```

SEARCH

```
var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/search',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
    'x-rapidapi-key': '0375a38a59msh966907970eb2c09p1fcaf8jsn35c93bc14c01'
  },
  data: {currency: 'INR', location_id: '662321', limit: '30', language: 'en_US'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
