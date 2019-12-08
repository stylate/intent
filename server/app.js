var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var shop = require("./shop.js");
var app = express();

// initialization
app.listen(8000, () => {
    console.log("Server running on port 8000.");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/* Initialize a new shopping cart. */
app.get("/init", (req, res, next) => {
    shop.initCart();
    res.json(shop.shoppingCart);
});

/* Get total price from shopping cart. */
app.get("/total", (req, res, next) => {
    res.json(shop.showTotal());
});

/* Retrieve information regarding an item. */
app.get("/items", (req, res, next) => {
    res.json(shop.getData());
});

/* Add ID to shopping cart. */
app.post("/add/:id", (req, res, next) => {
    const data = req.body; // body only contains ID
    console.log("data: ", data);
    shop.addItem(data);
    res.send(shop.shoppingCart); // send updated shopping cart information
});