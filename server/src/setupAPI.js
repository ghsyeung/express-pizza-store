const cors = require('cors');
const express = require('express');

const ChefSecrets = {
  "mario": 'red',
  "luigi": 'green',
};

const LastOrderId = 1;
const Orders = [
  {size: "L", quantity: 4, delivered: false, type: "BBQ Chicken", orderId: 0},
];

function createOrder(size, quantity, type) {
  const orderId = LastOrderId;
  const newOrder = { size, quantity, type, delivered: false, orderId, };
  Orders.push(newOrder);
  LastOrderId++;
  return newOrder;
}

function removeOrder(orderId) {
  Orders = Orders.filter(o => o.orderId !== orderId);
}

function checkChefSecrets(id, s) {
  return ChefSecrets[id] === s;
}

function setup(app) {

  // Exercise 1: create a GET /orders/:orderId API
  // - looks up Orders[orderId]
  // - returns the order object using response.json

  app.post('/orders', (request, response) => {
    // Exercise 2: order pizza
    // - if quantity is valid, 
    //   - add the pizza to the list of orders, use `createOrder` function to help 
    //   - reply json { ok: true, id: orderId }
    // - otherwise, reply json { ok: false, message: "Error: Invalid quantity" if it's not valid" }
    let r = {ok: false, message: "Not Implemented"};
    response.status(400).json(r);
  });

  // Exercise 3: create a MIDDLEWARE to print out all requests
  // - use console.log to print out request.method and request.url with current time
 
  // Exercise 4: create a POST /delivered API to update the delivered status of a pizza
  // - the body will come in this format { orderId: <number>, delivered: <true | false> }
  // - if there's any error (no pizza with orderId, delivered is not valid), 
  //   - you should return { ok: false, message: "Error: Invalid request" } with status 400
  // - if there's no error, return { ok: true } 
  
  // Exercise 5: add a MIDDLEWARE /delivered to make sure only valid Chefs can update the delivered status
  // - extra information is passed in to the body as { chef: <string>, secret: <string> }
  // - extract chef and secret
  // - check if the secret matches the one we store in ChefSecret
  // - if it's valid
  //   - we move on by using next()
  // - if it's not valid
  //   - we response with { ok: false, message: "Error: Unauthorized" } with status 403

  // Exercise 6: add a DELETE /orders/:orderId to delete a particular order 
  // - extract the orderId from request.params
  // - use removeOrder to remove the order
  // - always return { ok: true }
  
  // Exercise BONUS: add a MIDDLEWARE /orders/* to only allow DELETE /orders/:orderId to work if it's a chef
  // - if request.method is not DELETE, continue (next())
  // - if request.method is DELETE,
  //   - extract the functionality in Exercise 5, and use it
}

module.exports = setup;
