const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ListSchema = new Schema({
  user: {type: ObjectId, ref: 'User'},
  name: {type: String, required: true},
  todos: [{type: ObjectId, ref: 'Todo'}], 
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('list', ListSchema);