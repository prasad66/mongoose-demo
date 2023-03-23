import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import authRouter from './routes/auth.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.json({ message: 'hi' });
});

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`listening on http://localhost:${PORT}`);
        })
    } catch (e) {
        console.error(e);
    }
};

startServer();