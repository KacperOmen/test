import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import clientRoute from './routes/client.route.js'
import 'dotenv/config';

const app = express()
app.use(express.json())
app.use(cors());

app.use("/api/clients", clientRoute);

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Clients API'});
})

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch(() => {
    console.log("Connection failed")
})
