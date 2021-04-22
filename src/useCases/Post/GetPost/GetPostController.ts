import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController {
    constructor(
        private getPostUseCase: GetPostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
      	try {
          let resp;
          if (request.params.id) 
            resp = await this.getPostUseCase.find(request.params.id);
          else            
            resp = await this.getPostUseCase.getAll();
          
          
          return (resp == null)?response.status(404).json({ error: false, data: resp }):response.status(200).json({ error: false, data: resp });
        } catch (err) {
          return response.status(400).json({
            error: true,
            message: "Não localizado!",
          });
        }
    }
}