import { Router } from "express";
import loginRouter from "./loginRoute.js";
import signupRouter from "./signupRoute.js";

const router = Router();

router.use("/login", loginRouter);
router.use("/signup", signupRouter);

export default router;
