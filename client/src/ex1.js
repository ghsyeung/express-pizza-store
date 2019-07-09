const fetch = require('node-fetch');
const HOST = 'http://localhost:3555';


fetch(`${HOST}/orders/1`)
  .then(response => response.json())
  .then(r => {
    console.log("Printing Pizza 1");
    console.log(r);
  })
  .catch(error => {
    console.error(error);
  })
;
