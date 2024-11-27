const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must be provide name'],
    maxlength: [20, 'name cannot be more then 20 characters'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
