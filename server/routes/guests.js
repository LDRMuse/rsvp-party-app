const router = require('express').Router()
const auth = require('../middleWare/auth')
const { check, validationResult } = require('express-validator')

//CRUD

// guest Model
const Guest = require('../models/Guest')

//get guests
router.get('/', auth, async (req, res) => {
  try {
    const guests = await Guest.find({ user: req.user.id })
    res.json(guests)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }

  //add guest
  router.post('/', auth,
    [
      check('name', 'Please provide a name').not().isEmpty(),
      check('phone', 'Please provide a phone number').not().isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
      }
      const { name, phone, dietary, isConfirmed } = req.body
      try {
        let guest = new Guest({
          user: req.user.id,
          name,
          phone,
          dietary,
          isConfirmed
        })
        guest = await guest.save()
        res.json(guest)
      } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
      }
    })
})

module.exports = router
