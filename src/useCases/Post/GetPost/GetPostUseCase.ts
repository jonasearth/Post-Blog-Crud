import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";

export class GetPostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async find(id: string) {   
        return await this.postRepository.getById(id);
    }

    async getAll() {
       return await this.postRepository.getAll();
    }
}