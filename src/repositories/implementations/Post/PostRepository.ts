import { IPostRepository } from "./IPostRepository";

import { Post } from "../../../entities/Post";

import  PostModel  from "./PostModel";


export class PostRepository implements IPostRepository {

	async getByUrl(url: string) {

        const resp = await PostModel.find({url: url})
        if (resp[0])    
            return resp[0];  
        else
            return null;
        
	}

	async getAll(){
        return await PostModel.find({});
	}

    
	async create(title: string, body: string,author: string, tags: string[], url: string): Promise<boolean> {
		

        PostModel.create({
            title,
            body,
            author,
            tags,
            url
        }, function (err ) {
            if (err) return false;
            else return true;
        })

		return;
	}
}
