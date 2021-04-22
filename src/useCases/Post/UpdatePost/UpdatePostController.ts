import { Request, Response } from "express";
import { Post } from "../../../entities/Post";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

import {convertStringToUrl} from "../../../utils/convertStringToUrl"

export class UpdatePostController {
	constructor(private updatePostUseCase: UpdatePostUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const post = new Post(
			{
				body:request.body.body,
				title: request.body.title,
				author: request.body.author, 
				tags: request.body.tags,
				url:  convertStringToUrl(request.body.url),
			},
			request.params.id
		);

		try {
			const resp = await this.updatePostUseCase.execute(post);

			return response.status(201).json({ error: false, data: resp });
		} catch (err) {
			return response.status(400).json({
				error: true,
				message: err.message || "Unexpected error.",
			});
		}
	}
}
