const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  firstName: { type: String, required: true, minlength: 3 },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  passwordHash: {
    type: String,
    required: function () {
      return !this.googleUserId;
    }
  },
  email: { type: String, required: true, unique: true },
  lists: [{type: ObjectId, ref: 'List'}]
});

module.exports = mongoose.model('User', UserSchema);