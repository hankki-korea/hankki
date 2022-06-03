import mongoose, { Schema } from "mongoose";
import User from "./User";

const CompanySchema = mongoose.Schema({
  is_activated: {
    // 활성화 여부
    type: Boolean,
    default: true,
  },

  name: {
    // 가게 이름
    type: String,
    required: true,
  },

  manager_id: {
    // 사장 uid
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  menus: [
    // 메뉴
    {
      date: {
        type: Date,
        required: true,
      },

      time: {
        type: String,
        required: true,
        enum: ["breakfast", "lunch", "dinner"],
      },

      foods: [String],
    },
  ],

  fixed_menus: [String], // 고정 메뉴

  pictures: [String], // 사진

  rates: [
    // 별점
    {
      customer_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },

      rate: {
        type: Number,
        required: true,
      },
    },
  ],

  location: {
    // 좌표
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: [
      {
        type: Number,
        required: true,
      },
    ],
  },

  address: {
    // 주소
    type: String,
    required: true,
  },

  operating_price: [
    // 가격
    {
      time: {
        type: String,
        required: true,
        enum: ["breakfast", "lunch", "dinner"],
      },

      price: { type: Number, required: true },
    },
  ],

  operating_time: {
    // 운영 시간
    weekday: [Date],
    holiday: [Date],
  },

  description: String, // 소개
});

export default mongoose.model("Company", CompanySchema);
