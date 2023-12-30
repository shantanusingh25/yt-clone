import mongoose, { Schema } from "mongoose"; //imported moongoose 
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; //imported aggregateplugin

const message = `is required`;

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,
        required: [true , `videoFile ${message}`],
        trim: true,
    },

    thumbnail: {
        type: String,
        required: [true , `thumbnail ${message}`]
    },

    title: {
        type: String,
        required: [true , `title ${message}`]
    },

    description: {
        type: String,
        required: [true , `description ${message}`]
    },

    
    duration: {
        type: Number,
        required: [true , `duration ${message}`]
    },

    
    views: {
        type: Number,
        default: 0
    },

    isPublished: {
        type: Boolean,
        default: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
} , {
    timestamps: true
})

videoSchema.plugin(mongooseAggregatePaginate); //aggreagte plugin use

export const Video = mongoose.model(`Video` , videoSchema);