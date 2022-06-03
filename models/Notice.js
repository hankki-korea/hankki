import mongoose, { Schema } from "mongoose";

const NoticeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },

  body: {
    type: String,
    required: true,
  },

  pictures: [String],
});

export default mongoose.model("Notice", NoticeSchema);
