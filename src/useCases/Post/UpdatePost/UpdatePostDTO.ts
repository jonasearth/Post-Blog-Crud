export interface IUpdatePostRequestDTO {
    id: string,
    title: string,
    body: string,
    author: string,
    tags:string[],
    url: string,       
}