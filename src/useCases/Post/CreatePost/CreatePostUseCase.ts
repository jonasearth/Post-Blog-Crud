import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { ICreatePostRequestDTO } from "./CreatePostDTO";

export class CreatePostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(data: ICreatePostRequestDTO) {
        if (data.title == null || data.body == null || data.author == null|| data.url == null) {
            throw new Error("Todos os campos devem ser preenchidos!")
        } 
        if (data.title.length < 5 ) {
            throw new Error("Titulo deve ter mais de 6 digitos!")
        }
        if (data.body.length < 20 ) {
            throw new Error("Corpo do post não pode ter menos que 20 caracteres!")
        }
        if (data.title.length < 1 ) {
            throw new Error("Autor não pode ser em branco!")
        }

        if (await this.postRepository.getByUrl(data.url) != null)
            throw new Error("Um Post com esse titulo já existe");

        await this.postRepository.create(data.title, data.body, data.author, data.tags, data.url)
        return "Post criado com sucesso!"

    } 
}