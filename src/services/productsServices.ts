import axios from 'axios'
import { Product } from '../types/productTypes'
import { createProductDto } from '../types/productTypes'

export const fetchAllProducts = async (): Promise<Product[]> => {
   const result = await axios.get(`http://localhost:3001/products`)
   return result.data
}

export const deleteProduct = async (id: number | undefined): Promise<void> => {
   await axios.delete(`http://localhost:3001/products/${id}`)

}

export const fetchOneProduct = async (id: number | undefined): Promise<Product> => {
   const result = await axios.get(`http://localhost:3001/products/${id}`)
   return result.data
}

export const createProduct = async (product: createProductDto): Promise<Product> => {
   const result = await axios.post(`http://localhost:3001/products`, product)
   return result.data
}

export const updateProduct = async (id:number,product: createProductDto) : Promise <Product>=> {
console.log('id',id);
console.log('product',product);


   const result = await axios.patch(`http://localhost:3001/products/${id}`,product)
   console.log('resulll axios',result);
   
   return result.data
}



//   export const updateProduct = async(id :number): Promise<Product[]>=>{
//     const result = await axios.delete(`http://localhost:3001/products/${id}`)
//     return result.data
//  }

