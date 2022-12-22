import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDatabase from './config/db.js';
import { errorHandling } from './utils/error.js';
import { verificarToken } from './utils/verificarToken.js';
import authRoutes from './routes/authRoutes.js';
import alunoRoutes from './routes/alunoRoutes.js';
import exercicioRoutes from './routes/exercicioRoutes.js';
import fichaRoutes from './routes/fichaRoutes.js';
import grupoMuscularRoutes from './routes/grupoMuscularRoutes.js';
import instrutorRoutes from './routes/instrutorRoutes.js';
import tipoExercicioRoutes from './routes/tipoExercicioRoutes.js';

//constroi o pipeline
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRoutes);
app.use('/api/alunos', alunoRoutes);
app.use('/api/exercicios', verificarToken, exercicioRoutes);
app.use('/api/fichas', verificarToken, fichaRoutes);
app.use('/api/gruposmusculares', verificarToken, grupoMuscularRoutes);
app.use('/api/instrutores', verificarToken, instrutorRoutes);
app.use('/api/tiposexercicios', verificarToken, tipoExercicioRoutes);

app.use(errorHandling);

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Servidor rodando na porta ${PORT}`);
});