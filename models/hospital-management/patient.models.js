import mongoose from "mongoose"
 
const PatientSchema = new  mongoose.Schema({
   
},{timestamps: true}
)

export const Patient = mongoose.models("Patient",PatientSchema)