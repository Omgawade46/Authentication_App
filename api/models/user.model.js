import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
   password: {
        type: String,
        required: true,
    },
    profilrPicture:{
        type: String,
        default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid",
        

    },

},  {timestamps: true});

const User  = mongoose.model('User', userSchema);

export default User;