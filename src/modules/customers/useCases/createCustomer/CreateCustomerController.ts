import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;
    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    await createCustomerUseCase.execute({
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
    return response.status(201).send();
  }
}

export { CreateCustomerController };
