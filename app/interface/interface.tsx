export default interface Article {
    _id: null | string,
    thema: string,
    title: string,
    description: string,
    imgSrc: string

}

export default interface IUser {
    _id: null | string,
    email: string,
    name: string,
    password: string,
    role: string
}