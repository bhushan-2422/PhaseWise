import { Router } from "express";
import { geminiModel } from "../controller/user.controller.js";


const router = Router()

router.route('/gemini').post(geminiModel)

export default router