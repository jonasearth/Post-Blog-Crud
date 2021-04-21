import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { IUpdatePostRequestDTO } from "./UpdatePostDTO";

export class UpdatePostUseCase {
    constructor(
        private adminRepository: IPostRepository,
    ) { }

    async execute(data: IUpdatePostRequestDTO) {
       



    }
}