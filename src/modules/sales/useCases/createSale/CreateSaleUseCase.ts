import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateSaleDTO } from "../../dtos/ICreateSaleDTO";
import { ISaleRepository } from "../../repositories/ISaleRepository";

@injectable()
class CreateSaleUseCase {
  constructor(
    @inject("SalesRepository")
    private salesRepository: ISaleRepository
  ) {}

  async execute({
    course_name,
    description,
    date_sale,
    value,
    retained_value,
    seller,
  }: ICreateSaleDTO): Promise<void> {
    // const categoryAlreadyExists = await this.salesRepository.findByName(
    //   course_name
    // );
    // if (categoryAlreadyExists) {
    //   throw new AppError("Category already exists.");
    // }

    await this.salesRepository.create({
      course_name,
      description,
      date_sale,
      value,
      retained_value,
      seller,
    });
  }
}

export { CreateSaleUseCase };
