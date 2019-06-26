import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
    text: {
        type: String
    },
    time: {
        type: Number
    },
    timeISO: {
        type: String  
    },
    title: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean
    }
});

export default mongoose.model('item', ItemSchema);