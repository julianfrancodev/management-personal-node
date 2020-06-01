import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },
    description: {
        type: String,
        maxlength: 255
    },
    state: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Category',categorySchema);

export default Category;