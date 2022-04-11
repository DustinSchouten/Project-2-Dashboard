require("dotenv").config();
const express = require("express")
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("index", { x:'x' });
}),


app.set("port", process.env.PORT || 8000);

const server = app.listen(app.get("port"), function () {
    console.log(`Application started on port: ${app.get("port")}`);
});