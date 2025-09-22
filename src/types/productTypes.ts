export type Product = {
    name: string
    price?: number
    type: ProductType
}

export enum ProductType {
    "Fashion" = "Fashion",
    "Grocery" = "Grocery",
}