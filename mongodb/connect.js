import mongoose from 'mongoose';

const connectDB = (uri) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(uri)
        .then(() => console.log('Connected to DB'))
        .catch((e) => console.error(e));
};

export default connectDB;