const express = require("express")
const mongoose = require("mongoose");
const router  = require("./router/router");


const app  = express()

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

const DBURI = `mongodb+srv://admin:admin@cluster0.1gwyq.mongodb.net/?retryWrites=true&w=majority`




mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));

app.use(router)


app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));