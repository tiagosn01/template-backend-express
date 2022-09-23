import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICreateSaleDTO } from "../../dtos/ICreateSaleDTO";
import { ISaleRepository } from "../../repositories/ISaleRepository";

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("SalesRepository")
    private saleRepository: ISaleRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<ICreateSaleDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const sales: ICreateSaleDTO[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [
            id,
            course_name,
            description,
            value,
            date_sale,
            retained_value,
            seller,
          ] = line;

          sales.push({
            id,
            course_name,
            description,
            value,
            date_sale,
            retained_value,
            seller,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(sales);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const sales = await this.loadCategories(file);

    sales.map(async (sale) => {
      const {
        id,
        course_name,
        description,
        date_sale,
        value,
        retained_value,
        seller,
      } = sale;

      const existCategory = await this.saleRepository.findByName(course_name);

      if (!existCategory) {
        await this.saleRepository.create({
          id,
          course_name,
          description,
          date_sale,
          value,
          retained_value,
          seller,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
