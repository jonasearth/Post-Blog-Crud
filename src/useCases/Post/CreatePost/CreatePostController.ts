import { Request, Response } from "express";
import { Post } from '../../../entities/Post'
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

     return
    }
}