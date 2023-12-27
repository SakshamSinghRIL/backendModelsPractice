import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false, // default value
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //  when we want to give other model refernce (special way to write)
      ref: 'User',
    },
    subTodos: [                              // Arrays of SubTOdos
      {
      type : mongoose.Schema.Types.ObjectId,
      ref : "subTodo"
    },
  ]
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoSchema); // name in database 'todos'
