import mongoose from 'mongoose';


console.log("MongoDB URI:", process.env.MONGODB_URI);

function connect(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
        console.warn("Server will continue running, but database is unavailable");
    });
}

export default connect;