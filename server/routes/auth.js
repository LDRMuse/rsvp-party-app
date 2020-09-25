const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// use model
const User = require('../models/user')


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
        return res.status(400).json({message: 'Invalid credentials'})
      }
const match = await bcrypt.compare(password, user.password)
if (!match) {
  return res.status(400).json({message: 'Invalid credentials'})
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
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  })

module.exports = router
