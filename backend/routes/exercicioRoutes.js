import express from 'express'
import {
  createExercicio,
  deleteExercicio,
  getExercicio,
  getExercicios,
  updateExercicio
} from '../controllers/exercicioController.js'

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/", verificarToken, getExercicios);
router.get("/:id",verificarToken, getExercicio);
router.post("/",verificarToken, createExercicio);
router.put("/:id",verificarToken, updateExercicio);
router.delete("/:id",verificarToken, deleteExercicio);

export default router;