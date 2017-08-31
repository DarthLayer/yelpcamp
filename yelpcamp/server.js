var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        {name: "Salman Creek", image:"http://www.photosforclass.com/download/7626464792"},
        {name: "Granite Hill", image:"http://www.photosforclass.com/download/5641024448"},
        {name: "Mountain Goat's Rest", image:"http://www.photosforclass.com/download/7121863467"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function (req, res) {
    res.send("You hit the post route!")
    // get data from form and add to campgrounds array
    // redirect back to campgrounds page
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("The YelpCamp Server Has Started!");
});