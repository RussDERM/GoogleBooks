// *Requirements and such
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");

const PORT = /*process.env.PORT ||*/ 3001;
const app = express();

// *Morgan..
app.use(logger("dev"));




// * Middleware..
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// * Seeder
const db = require("./models");
const bookSeed = {
  image:
  "https://books.google.com/books/content?id=yxv1LK5gyV4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70TjF98hbwKPUm8xsTJJOR4iqTAYrunvacZ2DQKX5BvxmIL1I1omqT31uCmnejzNuotrEv7lcKL_Q7Lxu7OIIQWLV1HvIhj6GPVLlhT8l4LqcOGUXgazjysNPIR7EJ-B9OQVBb3",
  title: "1984",
  author: "George Cornwell",
  description: "This book predicts today's society",
  link:
    "https://books.google.com/books?id=yxv1LK5gyV4C&dq=1984&hl=en&sa=X&ved=2ahUKEwj_kp6mwIPlAhUkIDQIHewBAyIQ6AEwAHoECAAQAg"
};

db.Book.remove({})
  .then(() => db.Book.collection.insertOne(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  // * END Seeder



// *DB Connection
mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then (() => {
  console.log("Connected to Database!!!!!!!!");
})
.catch(error => {
  console.log("No connection - ERROR ", error)
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
