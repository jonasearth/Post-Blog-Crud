import { Router } from "express";

import { getPostController } from '../useCases/Post/GetPost/'
import { createPostController } from '../useCases/Post/CreatePost/'
import { updatePostController } from '../useCases/Post/UpdatePost/'
import { deletePostController } from '../useCases/Post/DeletePost/'


export class PostRoutes {
    public router: Router
    public API_ROUTE: string
    constructor(router: Router, API_ROUTE: string) {
        this.API_ROUTE = API_ROUTE
        this.router = router

    }
    public init() {
        this.router.get(this.API_ROUTE + '/post/', (request, response) => {
            return getPostController.handle(request, response)
        });
        this.router.get(this.API_ROUTE + '/post/:id', (request, response) => {
            return getPostController.handle(request, response)
        });
        this.router.post(this.API_ROUTE + '/post/', (request, response) => {
            return createPostController.handle(request, response)
        });
        this.router.put(this.API_ROUTE + '/post/:id', (request, response) => {
            return updatePostController.handle(request, response)
        });
        this.router.delete(this.API_ROUTE + '/post/:id', (request, response) => {
            return deletePostController.handle(request, response)
        });

    }
}