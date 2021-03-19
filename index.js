require('dotenv').config({})
const express = require("express");
const app = express();


const mainRoutes = require("./src/routers")


app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is Runing Port 3000');
})
