import { Schema, models, model } from "mongoose";


const weeklySchema = new Schema({
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


const weekly = models.weekly || model("Weekly", weeklySchema);


export default weekly;