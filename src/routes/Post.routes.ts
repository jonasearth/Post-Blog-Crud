import { Router } from "express";

import { getPostController } from '../useCases/Post/GetPost/'


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

    }
}