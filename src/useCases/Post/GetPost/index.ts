
import { GetPostUseCase } from "./GetPostUseCase";
import { GetPostController } from "./GetPostController";
import { PostRepository } from "../../../repositories/implementations/Post/PostRepository";

const getPostRepository = new PostRepository();


const getPostUseCase = new GetPostUseCase(
    getPostRepository,

)

const getPostController = new GetPostController(
    getPostUseCase
)

export { getPostUseCase, getPostController }