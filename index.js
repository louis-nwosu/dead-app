const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const Log = require("./routes/log");
const Email_col = require("./routes/email_col");

//initialize the express app;
const app = express();

//connect to database';
mongoose.connect(
  "mongodb+srv://louis_0:grjujcp1g4jcu7oe@cluster0.isjfs.mongodb.net/noted?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("connection to database initalized"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 8080);

// app.use("/auth", Log);
app.use("/", Email_col);

//initialize the server
app.listen(app.get("port"), () =>
  console.log("server is running on port " + app.get("port"))
);
