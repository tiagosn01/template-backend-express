import { getRepository, Repository } from "typeorm";

import { ICreateSaleDTO } from "../../../dtos/ICreateSaleDTO";
import { ISaleRepository } from "../../../repositories/ISaleRepository";
import { Sale } from "../entities/Sale";

class SalesRepository implements ISaleRepository {
  private repository: Repository<Sale>;

  constructor() {
    this.repository = getRepository(Sale);
  }

  async create({
    course_name,
    description,
    value,
    retained_value,
    seller,
    date_sale,
    id,
  }: ICreateSaleDTO): Promise<void> {
    const sale = this.repository.create({
      id,
      description,
      course_name,
      value,
      retained_value,
      seller,
      date_sale,
    });

    await this.repository.save(sale);
  }

  async list(): Promise<Sale[]> {
    const sales = await this.repository.find();

    return sales;
  }

  async findByName(course_name: string): Promise<Sale> {
    const sale = await this.repository.findOne({ course_name });
    return sale;
  }
}

export { SalesRepository };
