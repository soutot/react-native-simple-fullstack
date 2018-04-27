import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  day: { type: Number },
  slot: { type: String },
  title: { type: String },
  speakers: [{ type: String }],
});

export const Session = mongoose.model('Session', sessionSchema);
export default Session;
