const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  firstName: { type: String, required: true, minlength: 3 },
  lastName: { type: String, required: true },
  passwordHash: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  lists: [{type: ObjectId, ref: 'List', default: []}]
});


module.exports = mongoose.model('User', UserSchema);

