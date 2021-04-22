import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
    constructor(
        private deletePostUseCase: DeletePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
      try {
            const resp = await this.deletePostUseCase.execute({ id: request.params.id })
            return response.status(201).json({ error: false, data: resp });
        } catch (err) {
            return response.status(400).json({
                error: true,
                message: 'Não foi possivel deletar!'
            })
        }
    }
}