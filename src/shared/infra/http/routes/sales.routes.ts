import { Router } from "express";
import multer from "multer";

import { CreateSaleController } from "../../../../modules/sales/useCases/createSale/CreateSaleController";
import { ImportCategoryController } from "../../../../modules/sales/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/sales/useCases/listCategories/ListCategoriesController";

const salesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createSaleController = new CreateSaleController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

salesRoutes.post("/", createSaleController.handle);

salesRoutes.get("/", listCategoriesController.handle);
salesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { salesRoutes };
