import mongoose, { Schema } from 'mongoose';

const personSchema = new Schema({
    category: { type: Schema.ObjectId, ref: 'Category' },
    name: { type: String, required: true, unique: true, maxlength: 50 },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    document: { type: String, required: true, maxlength: 50 },
    stock: { type: Number,default:1 },
    state: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const Person = mongoose.model('Person', personSchema);

export default Person;