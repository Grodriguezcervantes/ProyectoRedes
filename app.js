const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) =>{
    res.send("HOLA MUNDO!!!")
})
app.listen(port, () =>{
    console.log("example app listening at http://localhost:${port}")
})