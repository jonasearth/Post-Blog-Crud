import { IGetPostRequestDTO } from "./GetPostDTO";
import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";

export class GetPostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(data: IGetPostRequestDTO) {
       

    }
}