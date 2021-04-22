import { Request, Response } from "express";
import { Post } from '../../../entities/Post'

import { convertStringToUrl} from '../../../utils/convertStringToUrl'
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const post = new Post({
            title: request.body.title,
            body: request.body.body,
            author: request.body.author,
            tags:request.body.tags,
            url: convertStringToUrl(request.body.title),
        })

        try {

            const resp = await this.createPostUseCase.execute(post)

            return response.status(201).json({ error: false, data: resp });
        } catch (err) {
            return response.status(400).json({
                error: true,
                message: err.message || 'Unexpected error.'
            })
        }
    }
}