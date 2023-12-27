import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    //username:String,
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      min: [6, 'Must be at least 6, got {VALUE}'],
      max: 12,
    },
    // email:String,
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password required'],
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema); // name in database 'users'
