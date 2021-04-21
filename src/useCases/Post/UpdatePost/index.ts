import { PostRepository } from "../../../repositories/implementations/Post/PostRepository";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { UpdatePostController } from "./UpdatePostController";

const updatePostRepository = new PostRepository()


const updatePostUseCase = new UpdatePostUseCase(
    updatePostRepository,

)

const updatePostController = new UpdatePostController(
    updatePostUseCase
)

export { updatePostUseCase, updatePostController }