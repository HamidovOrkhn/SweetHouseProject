export interface InitialState<T> {
    init: InitialStateChild<T>  
}

interface InitialStateChild<T> {
    page: number,
    code: number,
    data: T
}