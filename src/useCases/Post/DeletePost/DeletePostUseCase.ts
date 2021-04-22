import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { IDeletePostRequestDTO } from "./DeletePostDTO";

export class DeletePostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(data: IDeletePostRequestDTO) {
         if (await this.postRepository.delete(data.id))
            return "Admin removido com sucesso!"
        else
            throw new Error("Erro ao deletar!")
    }
}