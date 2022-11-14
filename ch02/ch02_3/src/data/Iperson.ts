export type Iperson = {
    id: string
    createdDate: Date
    modifiedDate: Date
    name: string
    email: string
    avatar: string
    image: string
    comments: string
    contents: {
        comment: number
        retweet: number
        heart: number
    }
}