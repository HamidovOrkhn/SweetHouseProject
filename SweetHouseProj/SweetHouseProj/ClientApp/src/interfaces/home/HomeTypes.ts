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