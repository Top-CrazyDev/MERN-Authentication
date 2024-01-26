const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MERN", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
});
mongoose.connection.on("error", () => {
    console.log("Error !!")
});