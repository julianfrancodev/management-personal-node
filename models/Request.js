import mongoose, { Schema, Mongoose } from 'mongoose';


const requestSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    person: { type: Schema.ObjectId, ref: 'Person', required: true },
    type_voucher: { type: String, maxlength: 20, required: true },
    range_voucher: { type: String, maxlength: 7 },
    num_voucher: { type: String, maxlength: 10, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
    req_description:{type:String, required:true, maxlength:500},
    details: [{
        _id: {
            type: String,
            required: true
        },
        person: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        service_price: {
            type: Number,
            required: true
        }
    }],
    state: { type: Number, default: 1 },
    createAt: { type: Date, default: Date.now }
});

const Request_s = mongoose.model('Request',requestSchema);

export default Request_s;