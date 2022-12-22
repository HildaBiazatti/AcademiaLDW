import express from 'express'
import {
  createAluno,
  deleteAluno,
  getAluno,
  getAlunos,
  updateAluno
} from '../controllers/alunoController.js';

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/",verificarToken, getAlunos);
router.get("/:id",verificarToken, getAluno);
router.post("/",verificarToken, createAluno);
router.put("/:id", verificarToken, updateAluno);
router.delete("/:id",verificarToken, deleteAluno);

export default router;