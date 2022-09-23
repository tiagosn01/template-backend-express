import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerRepository {
  create(data: ICreateCustomerDTO): Promise<void>;
  findByEmail(email: string): Promise<Customer>;
  findById(id: string): Promise<Customer>;
}

export { ICustomerRepository };
