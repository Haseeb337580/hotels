const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const menuitem = require("./routers/menuitems");
const personRoutes = require("./routers/personrouter");
app.use("/menu",menuitem);
app.use("/person",personRoutes);

//Parameterised API calls


// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

// app.get('/hello',  (req, res)=> {
//     res.send('Hello I am Aiden')
//   })

app.get("/fruits", (req, res) => {
  let fruits = {
    apple: 5,
    banana: 10,
    orange: 15,
  };
  res.send(fruits);
});

app.listen(3000);
