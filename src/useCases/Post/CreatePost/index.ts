import { PostRepository } from "../../../repositories/implementations/Post/PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";

const createPostRepository = new PostRepository()


const createPostUseCase = new CreatePostUseCase(
    createPostRepository,

)

const createPostController = new CreatePostController(
    createPostUseCase
)

export { createPostUseCase, createPostController }