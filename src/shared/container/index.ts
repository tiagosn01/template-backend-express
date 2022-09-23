import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { CustomersRepository } from "../../modules/customers/infra/typeorm/repositories/CustomersRepository";
import { ICustomerRepository } from "../../modules/customers/repositories/ICustomerRepository";
import { SalesRepository } from "../../modules/sales/infra/typeorm/repositories/SalesRepository";
import { ISaleRepository } from "../../modules/sales/repositories/ISaleRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICustomerRepository>(
  "CustomersRepository",
  CustomersRepository
);
container.registerSingleton<ISaleRepository>(
  "SalesRepository",
  SalesRepository
);
