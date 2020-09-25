require('dotenv').config()
const jwt = require('jsonwebtoken')

// middleware for authenticating the token
const auth = (req, res, next) => {
  const token = req.header('auth-token')
  if(!token) {
    return res.status(401).json({message: 'No Token, access denied'})
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = decoded.user
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({message: 'Invalid token'})
  }
}

module.exports = auth
