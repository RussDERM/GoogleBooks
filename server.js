const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect("mongodb://localhost/googlebooksSSSSS", { useNewUrlParser: true })
.then(() => console.log("server here!"));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});