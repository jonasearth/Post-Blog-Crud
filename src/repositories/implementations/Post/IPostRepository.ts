import { Post } from "../../../entities/Post";

export interface IPostRepository {
    getByUrl(url: string):any;
    getAll():any;
    create(title: string, body: string,author: string, tags: string[], url: string):Promise<boolean>;
}