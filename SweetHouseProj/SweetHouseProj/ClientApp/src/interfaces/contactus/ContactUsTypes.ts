export default interface ContactUsInitial {
    data:ContactUsChildState
}

interface ContactUsChildState {
    phone: string,
    location: string,
    email:string
    mapX: number,
    mapY:number
}