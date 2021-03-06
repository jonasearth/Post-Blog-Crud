import { IPostRepository } from "./IPostRepository";
import  PostModel  from "./PostModel";
export class PostRepository implements IPostRepository {

	async getById(id: string) {

        const resp = await PostModel.findById(id)
        if (resp)    
            return resp;  
        else
            return null;
        
	}

    async getByUrl(url: string, id?: string) {

        const resp = await PostModel.find({url: url})
        if (resp[0])    
            if (id == resp[0].id) {
                return resp[0]
            }else { 
                return false  
            }
        else
            return null;
        
	}

	async getAll(){
        return await PostModel.find({});
	}

	async create(title: string, body: string,author: string, tags: string[], url: string): Promise<boolean> {
		const date = new Date();

        PostModel.create({
            title,
            body,
            author,
            tags,
            url,
            created_at: date,
            updated_at: date,
            
        }, function (err ) {
            if (err) return false;
            else return true;
        })

		return;
	}
    
    async update(id: string, title: string, body: string,author: string, tags: string[], url: string): Promise<boolean> {
		const date = new Date();

        const resp = await PostModel.updateOne({_id:id},{
            title,
            body,
            author,
            tags,
            url,
            updated_at: date,
            
        })
         if (resp.n === 1) return true;
            else return false;
		return;
	}

    async delete(id: string) {

        const resp = await PostModel.deleteOne({_id:id})
        console.log(resp)
        if (resp.n === 1)    
            return true;  
        else
            return false;
        
	}
}
