import { inject, injectable } from "tsyringe";

import { Sale } from "../../infra/typeorm/entities/Sale";
import { ISaleRepository } from "../../repositories/ISaleRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ISaleRepository
  ) {}

  async execute(): Promise<Sale[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
