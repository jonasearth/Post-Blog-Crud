export interface IPostRepository {
    getById(id: string):any;
    
    getByUrl(url: string):any;
    getAll():any;
    create(title: string, body: string,author: string, tags: string[], url: string):Promise<boolean>;
}