import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
     title: string,
     body: string,
     url: string,
     author: string,
     tags: [string],
}

const PostSchema = new mongoose.Schema({
     title: String,
     body: String,
     url: String,
     author: String,
     tags: [String],
     created_at: Date,
     updated_at: Date
})

export default mongoose.model<IPost>('Post', PostSchema);
