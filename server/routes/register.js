const router = require('express').Router()
const { check, validationResult } = require('express-validator')

//validation for name, email and password
router.post('/',
[
  check('name', 'Please provide a name').not().isEmpty(),
  check('email', 'Please provide a valid email').isEmail(),
  check('password', 'Please provide a password that is 6 characters').isLength({min: 6})
],
(req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({error: errors.array()})
  }
  res.send('Success')
  const {name, email, password} = req.body
})

module.exports = router
