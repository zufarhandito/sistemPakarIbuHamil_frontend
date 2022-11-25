const axios = require('axios').default;

axios.post('http://localhost:5000/login', {
  email: 'alskdasd',
  password: 'Flintstone'
})
.then(function (response) {
  console.log(response.data);
})