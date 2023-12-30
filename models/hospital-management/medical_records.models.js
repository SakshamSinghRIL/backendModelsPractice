import mongoose from "mongoose"
 
const medicalRecordSchema = new  mongoose.Schema({
   disease : [
    {
    type : String,
    }
]
    
},{timestamps: true}
)

export const MedicalRecord = mongoose.models("MedicalRecord",medicalRecordSchema)