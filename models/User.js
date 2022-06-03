import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
  is_activated: {
    // 활성화 여부
    type: Boolean,
    default: true,
  },

  user_type: {
    // 회원 유형
    type: String,
    required: true,
    enum: ["manager", "customer"],
  },

  name: {
    // 이름
    type: String,
    required: true,
  },

  email: {
    // 이메일
    type: String,
  },

  phone_number: {
    // 전화번호
    type: String,
  },

  company_id: {
    // 가게 uid
    type: Schema.Types.ObjectId,
    ref: "Company",
  },

  like_company_ids: [
    // 찜 가게
    {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
  ],
});

export default mongoose.model("User", UserSchema);
