const express = require("express");
const app = express();


const mainRoutes = require("./src/routers")


app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/', mainRoutes);

app.listen(2000, () => {
    console.log("server run 2000");
});