import { Schema, models, model } from "mongoose";


const dietSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    week_day: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    published: {
        type: Boolean,
        default: true,
      },
    

})


const diet = models.diet || model("Diet", dietSchema);


export default diet;