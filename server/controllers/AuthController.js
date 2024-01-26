const User = require("../models/crudModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

module.exports.Signup = async (req, res,) => {
  const { email, password} = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.send("User already exists" );
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res.send('User registered successfully');
}
module.exports.Login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password ){
    res.send('All fields are required');
  }
  const user = await User.findOne({ email });
  if(!user){
    res.send('Incorrect password or email' );
  }
  const auth = await bcrypt.compare(password,user.password)
  if (!auth) {
    res.send('Incorrect password or email');
  }
  const payload = {
    user: {
      id: user._id,
    },
  };
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
  res.send(token);
}
module.exports.Submit = async (req,res) => {
  console.log(req.user.id);
  res.send("OK");
}