import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  durationInMonths: {
    type: Number,
    required: true,
    default: 6,
  },
}, { timestamps: true });

const coursemodel = mongoose.model("courses", courseSchema);

export default coursemodel;
