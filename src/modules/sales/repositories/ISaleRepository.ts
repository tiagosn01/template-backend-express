import { ICreateSaleDTO } from "../dtos/ICreateSaleDTO";
import { Sale } from "../infra/typeorm/entities/Sale";

interface ISaleRepository {
  findByName(name: string): Promise<Sale>;
  list(): Promise<Sale[]>;
  create(sale: ICreateSaleDTO): Promise<void>;
}

export { ISaleRepository };
