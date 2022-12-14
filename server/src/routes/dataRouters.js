import Router from "express";
import dataController from "../controllers/dataController.js";

const router = Router();

router.get('/', dataController.getData);

export default router;
