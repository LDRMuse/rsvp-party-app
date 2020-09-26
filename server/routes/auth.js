const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleWare/auth')


// use model
const User = require('../models/user')

// auth is protecting this route
router.get('/', auth, async (req, res) => {
try {
  const user = await User.findById(req.user.id).select("-password")
  res.json(user)
} catch (error) {
  console.error(error.msg)
 res.status(500).send('Server Error')
}
})






//authentication for email and password
router.post('/',
  [
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a password that is 6 characters').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const {  email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({msg: 'Invalid credentials'})
      }
const match = await bcrypt.compare(password, user.password)
if (!match) {
  return res.status(400).json({msg: 'Invalid credentials'})
}
      const payload = {
        user: {
          id: user.id
        }
      }
      //assigning and generating a token
      jwt.sign(payload, process.env.SECRET, {
        expiresIn:3600
      }, (err, token) => {
        if(err) throw err
        res.send({ token })
      })
    } catch (error) {
      console.error(error.msg)
      res.status(500).send('Server Error')
    }
  })

module.exports = router
