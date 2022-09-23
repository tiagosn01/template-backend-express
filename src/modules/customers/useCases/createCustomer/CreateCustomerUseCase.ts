/* eslint-disable import-helpers/order-imports */
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomerRepository
  ) {}

  async execute({
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
    const customerAlreadyExists = await this.customersRepository.findByEmail(
      email
    );

    if (customerAlreadyExists) {
      throw new AppError("Customer already exists");
    }

    await this.customersRepository.create({
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
  }
}

export { CreateCustomerUseCase };
