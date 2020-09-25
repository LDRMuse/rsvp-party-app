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

//delete guest
router.delete('/:id', auth, async (req, res) => {
  // if there is no guest, do this
  try {
    let guest = await Guest.findById(req.params.id)
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' })
    }
    // if there is a guest, find them and remove
    await Guest.findByIdAndRemove(req.params.id)
    res.send('Removed Guest')
  } catch (error) {
    // if server error, do this
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})


//update guest
router.put('/:id', auth, async (req, res) => {
  const { name, phone, dietary, isConfirmed } = req.body
  const updatedGuest = { name, phone, dietary, isConfirmed }
  try {
    let guest = await Guest.findById(req.params.id)
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' })
    }
    guest = await Guest.findByIdAndUpdate(req.params.id, {$set: updatedGuest}, { new: true })
    res.send(guest)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})




module.exports = router
