import mongoose from "mongoose"
 
const doctorSchema = new  mongoose.Schema({
   
},{timestamps: true}
)

export const Doctor = mongoose.models("Doctor",doctorSchema)