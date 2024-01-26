const User = require("../models/crudModel");
require("dotenv").config();
const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken");


module.exports=userVerification =asyncHandler(async (req, res,next) => {
  const token = req.header('x-auth-token');
  if (!token) { 
    res.send('No token, authorization denied');
  }
  // const decoded = jwt.verify(token, 'your-secret-key');
  // if(decoded){
  //   const user= await User.findById(decoded);
  //   if(user)
  //     next();
  //   else
  //     res.send("Token is not valid");
  // }
  // else{
  //   res.send('Token is not valid');
  // }
  console.log(token);
  // try {
    jwt.verify(token, 'your-secret-key', (error, decoded) => {
      if (error) {
        res.send('Token is not valid');
      } else {
        req.user = decoded.user;
        next();
      }
    });
  // } catch (err) {
  //   console.error('Something is wrong with auth middleware');
  //   res.send('Server Error' );
  // }
});
