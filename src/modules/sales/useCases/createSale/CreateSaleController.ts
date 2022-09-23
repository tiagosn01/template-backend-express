import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSaleUseCase } from "./CreateSaleUseCase";

class CreateSaleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      course_name,
      description,
      date_sale,
      value,
      retained_value,
      seller,
    } = request.body;
    const createSaleUseCase = container.resolve(CreateSaleUseCase);

    await createSaleUseCase.execute({
      course_name,
      description,
      date_sale,
      value,
      retained_value,
      seller,
    });
    return response.status(201).send();
  }
}

export { CreateSaleController };
