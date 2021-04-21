import mongoose from 'mongoose';

const DevSchema = new mongoose.Schema({
    name: String,
    git_user: String,
    bio: String,
    avatar_url: String,
    techs: [String],
})

export default mongoose.model('Dev', DevSchema);
