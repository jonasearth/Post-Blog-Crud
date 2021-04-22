import { IPostRepository } from "../../../repositories/implementations/Post/IPostRepository";
import { IUpdatePostRequestDTO } from "./UpdatePostDTO";

export class UpdatePostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(data: IUpdatePostRequestDTO) {
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
        if (data.url.length < 1 ) {
            throw new Error("Url não pode ser em branco!")
        }

        if (await this.postRepository.getByUrl(data.url, data.id) === false)
            throw new Error("Um Post com essa url já existe!");

        if(await this.postRepository.update(data.id, data.title, data.body, data.author, data.tags, data.url))
            return "Post atualizado com sucesso!"
        else{ 
            throw new Error("Não foi possivel atualizar o post!");
        }

    }
}