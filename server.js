const connect = require("./configs/db");
const express = require("express");
const cors = require("cors");

const app = express();

const path = require('path');

const whitelist = ['http://localhost:3000', 'http://localhost:8080'];
const corsOptions = {
    origin: function(origin, callback) {
        console.log("** Origin of request " + origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable");
            callback(null, true);
        } else {
            console.log("Origin rejected");
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));



if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'pepperfry/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'pepperfry/build', 'index.html'));
    });
}

app.use(express.json());
app.use(cors());

const userController = require("./controllers/userController");
const productController = require("./controllers/productsController");
const loginController = require("./controllers/loginController");
const searchController = require("./controllers/searchController");

app.use("/signup", userController);
app.use("/products", productController);
app.use("/login", loginController);
app.use("/search", searchController);




app.listen("4321", async () => {
    await connect();
    console.log("Listening to port 4321");
});