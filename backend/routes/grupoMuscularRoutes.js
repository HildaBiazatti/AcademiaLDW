import express from 'express'
import {
  createGrupoMuscular,
  deleteGrupoMuscular,
  getGrupoMuscular,
  getGruposMusculares,
  updateGrupoMuscular
} from '../controllers/grupoMuscularController.js';

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/", verificarToken, getGruposMusculares);
router.get("/:id",verificarToken, getGrupoMuscular);
router.post("/",verificarToken, createGrupoMuscular);
router.put("/:id", verificarToken,updateGrupoMuscular);
router.delete("/:id",verificarToken, deleteGrupoMuscular);

export default router;