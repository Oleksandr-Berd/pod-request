export type User = {
    email: string
}

export interface IProps {
    handleSubmit: (user:User) => void,
}