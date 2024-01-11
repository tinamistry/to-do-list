const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TodoSchema = new Schema({
  text: { type: String, required: true},
  tags: { type: String, required: true },  
  dateCreated: { type: Date, default: Date.now },
  description: { type: String},
  completed: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);