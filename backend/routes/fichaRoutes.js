import express from 'express'
import {
  createFicha,
  deleteFicha,
  getFicha,
  getFichas,
  updateFicha
} from '../controllers/fichaController.js';

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/",verificarToken, getFicha);
router.get("/:id",verificarToken, getFicha);
router.post("/",verificarToken, createFicha);
router.put("/:id",verificarToken, updateFicha);
router.delete("/:id",verificarToken, deleteFicha);

export default router;