const fetch = require('node-fetch');
const HOST = 'http://localhost:3555';


fetch(`${HOST}/orders`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    size: "S", 
    quantity: 4, 
    type: "Hawaiian",
  })
})
  .then(response => response.json())
  .then(r => {
    console.log("Ordered Hawaiian Pizza");
    console.log(r);
  })
  .catch(error => {
    console.error(error);
  })
;
