import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { ICreatePostRequestDTO } from "./CreatePostDTO";

export class CreatePostUseCase {
    constructor(
        private adminRepository: IPostRepository,
    ) { }

    async execute(data: ICreatePostRequestDTO) {
      

    }
}