//1. Create server
const express = require("express")
const connectDB = require("./config/db")
require('dotenv').config({ path: './config/.env' })
const userRoutes = require ("./routes/userRoutes")
const chatRoutes=require("./routes/chatRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
//dotenv.config();
connectDB();
const app = express()
app.use(express.json());

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000
app.listen(PORT,err => err ? console.error(err) : console.log(`Server is running on port ${PORT}`))