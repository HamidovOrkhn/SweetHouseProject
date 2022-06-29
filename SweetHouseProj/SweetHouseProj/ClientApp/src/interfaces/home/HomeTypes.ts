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

export interface CardStateInitial {
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
export interface HomeVideoInitial {
    data:HomeVideo
}
interface HomeVideo {
    src:string
}
export interface HomePicturesInitial {
    data: RoomPhotos[]
}