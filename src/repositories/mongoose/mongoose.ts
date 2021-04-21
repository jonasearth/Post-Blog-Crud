import mongoose from "mongoose";


mongoose.connect('mongodb+srv://postman:jonas@cluster0.ddncs.mongodb.net/posts?retryWrites=true&w=major', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default mongoose;