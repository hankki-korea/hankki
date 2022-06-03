import { Router } from "express";
import CustomerRouter from "./src/customerRouter";

const router = Router();

router.use("/customer", CustomerRouter);

export default router;
