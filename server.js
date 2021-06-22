const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("views", __dirname + "/public/")
app.set("layout")
app.use(express.static(__dirname + "/public/"));
app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/ourcompany", (req,res)=>{
    res.render("ourcompany");
});
app.get("/howitworks",(req,res)=>{
    res.render("howitworks");
});
app.get("/questions",(req,res)=>{
    res.render("questions");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.post("/contact", (req,res)=>{
    res.redirect("https://wa.me/6287839917728");
    res.send(req.body);
})
app.listen(process.env.PORT || 3000);