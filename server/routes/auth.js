const express  = require('express')

const router = express.Router()
const {signup,login,logout,refreshTokenGenerate}  = require('../controllers/authController')

// @ /api/auth/resister 
router.post('/register',signup);



// @ /api/auth/login 
router.post('/login', login);



// @ /api/auth/logout 
router.get('/logout', logout);



// @ /api/auth/refreshToken 
router.post('/refreshToken ', refreshTokenGenerate);



module.exports = router