import mongoose,{Schema, mongo} from 'mongoose';

const userSchema = new Schema({
    rol:{type:String,maxlength:30, required:true},
    name:{type:String,maxlength:50,unique:true,required:true},
    document_type:{type:String,maxlength:30},
    document_num:{type:String, maxlength:30},
    address:{type:String,maxlength:70},
    phone_num:{type:String,maxlength:20},
    email:{type:String,maxlength:50, unique:true,required:true},
    password:{type:String,maxlength:100,required:true},
    state:{type:Number,default:1},
    createdAt:{type:Date, default: Date.now}
})

const User = mongoose.model('User',userSchema);
export default User;