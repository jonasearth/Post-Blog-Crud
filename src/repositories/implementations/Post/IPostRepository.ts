export interface IPostRepository {
    getByUrl(id: string):any;
    getAll():any;
    create(title: string, body: string,author: string, tags: string[], url: string):Promise<boolean>;
}