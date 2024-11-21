import * as mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  kind: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true,
    unique: true
  },
  sex: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
