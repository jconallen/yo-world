const app = require('express')()

app.get('/', (req, res) => {
  res.send("<h1>Yo World from Appsody!</h1>");
});
 
module.exports.app = app;
