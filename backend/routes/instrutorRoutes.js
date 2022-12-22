import express from 'express'
import {
  createInstrutor,
  deleteInstrutor,
  getInstrutor,
  getInstrutores,
  updateInstrutor
} from '../controllers/instrutorController.js';

import {
  verificarAdmin,
  verificarToken,
  verificarUsuario
} from "../utils/verificarToken.js";

const router = express.Router();

router.get("/",verificarToken, getInstrutores);
router.get("/:id",verificarToken, getInstrutor);
router.post("/", verificarToken,createInstrutor);
router.put("/:id",verificarToken, updateInstrutor);
router.delete("/:id",verificarToken, deleteInstrutor);

export default router;