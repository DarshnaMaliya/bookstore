const express  = require('express');
const mongoose = require('mongoose');
const router = require("./routes/bookroutes");
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);

//connect to database

mongoose.connect("mongodb+srv://Darshna:Uv7F5rCZEeO5gmwG@darshna-cluster-1.0qbhmgk.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("Connected to Database"))
.then(()=> {
    app.listen(5000);
}).catch((err) => console.log(err));

//server running on port

app.listen(6000, () => {
    console.log(`Server running on port 6000`);
  });