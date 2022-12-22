import express from 'express'
import {
  createTipoExercicio,
  deleteTipoExercicio,
  getTipoExercicio,
  getTiposExercicios,
  updateTipoExercicio
} from '../controllers/tipoExercicioController.js'

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/", verificarToken, getTiposExercicios);
router.get("/:id",verificarToken, getTipoExercicio);
router.post("/",verificarToken, createTipoExercicio);
router.put("/:id",verificarToken, updateTipoExercicio);
router.delete("/:id",verificarToken, deleteTipoExercicio);

export default router;