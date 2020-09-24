const router = require('express').Router()


router.post('/', (req, res) => {
  res.send('user registered')
})

module.exports = router
