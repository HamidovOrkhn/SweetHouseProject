export interface InitialDataState {
    data: AboutUsInitial;

}
interface AboutUsInitial {
    aboutUsPictures: AboutUsPictures[],
    body: string,
    header: string,
    miniText: string
}
interface AboutUsPictures {
    src: string
}

export interface CardsState {
    data: CardStateInitial[];
}

interface CardStateInitial {
    id:number,
    name: string,
    price: number,
    bedCount: number,
    maxGuest: number,
    roomPhotos: RoomPhotos[]
}
interface RoomPhotos {
    src:string
}