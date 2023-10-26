export default interface ArticleI {
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

export default interface IQuestion {
    _id: null | string,
    userEmail: string,
    userName: string,
    text: string,
    adminAnswer: string,
    adminNane: string
}