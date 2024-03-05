const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TodoSchema = new Schema({
  title: { type: String, required: true},
  tags: { type: String, required: false },  
  dateCreated: { type: Date, default: Date.now },
  description: { type: String, required: false},
  completed: {type: Boolean, default: false, required: false}
});

module.exports = mongoose.model('Todo', TodoSchema);