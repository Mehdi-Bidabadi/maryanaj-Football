import { Schema, models, model } from "mongoose";


const programSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    day:{
        type: String,
        required: true,
    },
    watch:{
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: true,
      },
    

})


const Program = models.Program || model("Program", programSchema);


export default Program;