import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { IDeletePostRequestDTO } from "./DeletePostDTO";

export class DeletePostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(data: IDeletePostRequestDTO) {

    }
}