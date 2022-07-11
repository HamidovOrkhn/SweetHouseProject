export interface BlogDetails {
    data: BlogDetailsInitial
}
export interface BlogsInitial {
    data: BlogDetailsInitial[]
}
export interface BlogDetailsInitial {
    id:number,
    headText: string,
    bodyText: string,
    blogPicture: string,
    createdDate: string,
    updatedDate:string
}