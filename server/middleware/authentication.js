
const jwt = require('jsonwebtoken')
const AuthModel = require('../models/Auth')

const authProtect = async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
        req.user = await AuthModel.findById(decoded._id).select("-password");
  
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }   
};


// const authProtect =  (req,res,next) =>{
//   const token = req.header('x-auth-token')
//   if(!token){
//       return res.status(401).json('Not authenticated, not valid token')

//   }
  
//   try {
//       const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
//       req.user = user
//       next()
//   } catch (error) {
//       res.status(400).json('Token Invalid!')
//   }
//}
  
 module.exports = authProtect