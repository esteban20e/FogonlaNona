import { Router } from "express";
import { createUser, getUserOrders } from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/:id/orders", getUserOrders);

export default router;
