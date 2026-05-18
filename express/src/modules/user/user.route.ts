import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";

const router =Router()

router.post("/",userController.createUser);
router.get("/",userController.createGet );
router.get("/:id", userController.createSingleUser);
router.put("/:id", userController.createPut);
router.delete("/:id",userController.createDelete);

export const userRoute = router