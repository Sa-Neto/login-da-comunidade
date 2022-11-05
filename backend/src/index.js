import express from 'express';
import './db/config';
import router from './routes/routes';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/', router)

export default app