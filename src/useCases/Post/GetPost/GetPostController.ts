import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController {
    constructor(
        private getPostUseCase: GetPostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
      return
    }
}