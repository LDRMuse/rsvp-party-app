const mongoose = require('mongoose')

  //each guest will be a user, and we are matching the ObjectId to the admin user
const guestSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type:String,
    required:true
  },
  phone: {
    type:String,
    required:true
  },
  dietary: {
    type:String,
    required:true,
    default:'Non-Veg'
  },
  isConfirmed: {
    type:Boolean,
    default:false
  }
})

module.exports = mongoose.model('guest', guestSchema)
