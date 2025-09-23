import axios from 'axios'
import { CatsType } from '../types/productTypes'

export const fetchAllCats = async():Promise<CatsType[]>=>{
    const result= await axios.get('https://api.thecatapi.com/v1/images/search?limit=20')
        return result.data
 }

export const fetchCatById = async (id: string): Promise<CatsType> => {
    const result = await axios.get(`https://api.thecatapi.com/v1/images/${id}`)
    return result.data
}