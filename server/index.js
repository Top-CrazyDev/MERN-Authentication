require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./db");
const crudRoutes = require("./routes/crudRoutes");

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_KEY=process.env.JWT_KEY;

// database connection


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
	origin : "*"
}));
app.use(cookieParser());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// routes
app.use("/api", crudRoutes);
//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
