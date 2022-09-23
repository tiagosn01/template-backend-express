import { Router } from "express";

import { CreateCustomerController } from "../../../../modules/customers/useCases/createCustomer/CreateCustomerController";
// import { ImportCategoryController } from "../../../../modules/customers/useCases/importCategory/ImportCategoryController";
// import { ListCategoriesController } from "../../../../modules/customers/useCases/listCategories/ListCategoriesController";

const customersRoutes = Router();

const createSaleController = new CreateCustomerController();
// const importCategoryController = new ImportCategoryController();
// const listCategoriesController = new ListCategoriesController();

customersRoutes.post("/", createSaleController.handle);

// customersRoutes.get("/", listCategoriesController.handle);
// customersRoutes.post(
//   "/import",
//   upload.single("file"),
//   importCategoryController.handle
// );

export { customersRoutes };
