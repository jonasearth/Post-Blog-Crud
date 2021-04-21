import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
    constructor(
        private deletePostUseCase: DeletePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
      return
    }
}