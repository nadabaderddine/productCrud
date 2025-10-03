export type Product = {
    id?: number
    name?: string
    price?: number
    type?: ProductType
}

export enum ProductType {
    "fashion" = "fashion",
    "grocery" = "grocery",
}

export type CatsType = {
    id: string
    url: string
    width: number
    height: number

}

export type createProductDto = {

    name?: string
    price?: number
    type?: ProductType
}