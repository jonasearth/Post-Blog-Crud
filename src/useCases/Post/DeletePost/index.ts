import { PostRepository } from "../../../repositories/implementations/Post/PostRepository";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { DeletePostController } from "./DeletePostController";

const deletePostRepository = new PostRepository()


const deletePostUseCase = new DeletePostUseCase(
    deletePostRepository,

)

const deletePostController = new DeletePostController(
    deletePostUseCase
)

export { deletePostUseCase, deletePostController }