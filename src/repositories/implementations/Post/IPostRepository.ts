export interface IPostRepository {
    getById(id: string):any;
    
    getByUrl(url: string, id?: string):any;
    getAll():any;
    create(title: string, body: string,author: string, tags: string[], url: string):Promise<boolean>;
    update(id:string, title: string, body: string,author: string, tags: string[], url: string):Promise<boolean>;
    delete(id:string):Promise<boolean>;
}