import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open', () => console.log('Database sudah terkoneksi ...'));

app.use(cors());
app.use(express.json());
app.use(UserRoutes());

app.listen(5000, ()=> console.log('Server berjalan baik ...'));