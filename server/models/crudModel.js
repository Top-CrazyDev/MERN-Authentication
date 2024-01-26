const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crudSchema = new mongoose.Schema({
	email: String,
	password: String
});
// crudSchema.pre("save", async function () {
// 	this.password = await bcrypt.hash(this.password, 12);
//   });
module.exports = mongoose.model("Crud", crudSchema);
