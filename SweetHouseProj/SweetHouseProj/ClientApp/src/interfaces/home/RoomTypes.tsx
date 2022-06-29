export interface RoomState {
    data: RoomInitialState
}
export interface RoomInitialState {
    name: string,
    price: number,
    bedCount: number,
    maxGuest: number,
    roomSpace: number,
    roomView: string,
    roomDesc: string,
    hotelRules: string,
    amenities: Amenities[]
    roomPhotos:RoomPhotos[]
}
interface Amenities {
    icon: string,
    name: string
}
export interface RoomPhotos {
    src: string,
    isMain: boolean
}
export interface RoomProps {
    id: number,
    name:string
}