import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { customersRoutes } from "./customers.routes";
import { salesRoutes } from "./sales.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/customers", customersRoutes);
router.use("/sales", salesRoutes);
router.use(authenticateRoutes);

export { router };
