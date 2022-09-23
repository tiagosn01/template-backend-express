import { getRepository, Repository } from "typeorm";

import { ICreateCustomerDTO } from "../../../dtos/ICreateCustomerDTO";
import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { Customer } from "../entities/Customer";

class CustomersRepository implements ICustomerRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({
    id,
    name,
    email,
    document,
    phone,
    profession,
    age,
    zip_code,
    state,
    city,
    neighborhood,
    street,
  }: ICreateCustomerDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      document,
      phone,
      profession,
      age,
      zip_code,
      state,
      city,
      neighborhood,
      street,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Customer> {
    const user = await this.repository.findOne({ email });

    return user;
  }
  async findById(id: string): Promise<Customer> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { CustomersRepository };
