import mongoose from "mongoose"

const PatientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    diagonesedWith: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bloodGroup : {
        type : String,
        enum : ["A+","B+","AB+","O","A-","B-","AB-","O-"],
        required : true
    },
    gender : {
        type : String,
        enum : ["M","F","Others"],
        required : true
    },
    addmittedIN :{
            type : mongoose.Schema.Types.ObjectId,
            ref  : "Hospital"
    },
    diseases :{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "medicalRecordSchema"
}


}, { timestamps: true }
)

export const Patient = mongoose.models("Patient", PatientSchema)