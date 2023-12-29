import mongoose, { Schema } from "mongoose"; // mogoose imported
import jwt  from "jsonwebtoken"; //jwt importd
import bcrypt from "bcrypt"; // bcrypt imported

const message = `is required`;

const userSchema  = new mongoose.Schema({

    userName: {
        required: [true , `userName ${message}`],
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    } ,

    email: {
        required: [true , `email ${message}`],
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },

    fullName: {
        required: [true , `fullName ${message}`],
        type: String,
        trim: true,
    },

    avatar: {
        type: String, //cloudinary serive
        required: [true , `avatar ${messsage}`]
    },

    coverImage: {
        type: String,
    },

    watchHistory: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    },

    password: {
        type: String,
        required: [true , `password ${message}`],
    },

    refreshToken: {
        type: String
    },
}, {
    timestamps: true
});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next(); 
    }

    this.password = bcrypt.hash(this.password , 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password);
};

// adding custopm methods to userSchema model

userSchema.methods.genersteAccessToken = async function(next){
    jwt.sign({
        _id: this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName
    },

    process.env.ACCESS_TOKEN_SECRET ,

    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    );
}

userSchema.methods.generateRefreshToken = async function(next){
    jwt.sign({
        _id: this._id,
    },

    process.env.REFRESH_TOKEN_SECRET ,

    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    );
}

export const User = mongoose.model(`User` , userSchema);

// database designn is a subject