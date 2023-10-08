export interface ICreateUserDto {
    name: string | null | undefined
    phone: string | null | undefined
}
export interface ICreateUserResponseDto {
    id:string
    name: string
    phone: string
}