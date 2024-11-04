import dotenv from 'dotenv'
import express from "express"
import { resolve } from 'path'
import './src/database'
import homeRouter from './src/routes/HomeRoutes';
import userRouter from './src/routes/userRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import fotoRouter from './src/routes/fotoRoutes';

dotenv.config();
export const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));

app.use('/', homeRouter)
app.use('/users/', userRouter)
app.use('/tokens/', tokenRouter)
app.use('/alunos/', alunoRouter)
app.use('/fotos/', fotoRouter)
