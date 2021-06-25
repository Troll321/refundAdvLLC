const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const nodemailer = require("nodemailer");

var alert = "";

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
    res.render("contact", {alert: alert});
    alert = "";
});
app.post("/contact", (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'atila.ghulwani@gmail.com',
            pass: "gHulw^niL07"
        }
    });
    
    const mailOptions = {
        from: 'atila.ghulwani@gmail.com',
        to: 'atila.ghulwani@gmail.com',
        subject: 'Message by '+req.body.name,
        html: `<h1>This is a message by: ${req.body.email}</h1><br><br><h2>With name: ${req.body.name}</h2><br><br><h2>MESSAGE:</h2><p>${req.body.message}</p>`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    alert = "Message is being sent";
    res.redirect("/contact");
});
app.listen(process.env.PORT || 3000);