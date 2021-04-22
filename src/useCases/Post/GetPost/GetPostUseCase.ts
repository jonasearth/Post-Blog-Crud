import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";

export class GetPostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async find(url: string) {   
        return await this.postRepository.getByUrl(url);
    }

    async getAll() {
       return await this.postRepository.getAll();
    }
}