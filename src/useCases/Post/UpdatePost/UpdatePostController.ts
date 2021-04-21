import { Request, Response } from "express";
import { Post } from "../../../entities/Post";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
	constructor(private updatePostUseCase: UpdatePostUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		return
	}
}
