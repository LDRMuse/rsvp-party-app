const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// use model
const User = require('../models/user')


//validation for name, email and password
router.post('/',
  [
    check('name', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a password that is 6 characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const { name, email, password } = req.body
    // if a user exists, 'User already exists'
    // else, make a new user
    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({message: 'User already exists'})
      }
      user = new User({
        name,
        email,
        password
      })
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()

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
