const mongoose= require ("mongoose");
const connectDB = async()=>{
    try {
       const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log('DB is connected')
    } catch (error) {
        console.error(error)
    }
}
module.exports = connectDB;