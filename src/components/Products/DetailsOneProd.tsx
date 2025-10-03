import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { fetchOneProduct } from "../../services/productsServices"
import { Product } from "../../types/productTypes"

export default function DetailsOneProd() {
    const [detailsprod, setDetailprod] = useState<Product>()
    let params = useParams<{ id: string }>()
    
    useEffect(() => {
        async function getone() {
            const fetchedData = await fetchOneProduct(Number(params.id))
            setDetailprod(fetchedData)
        }
        getone()
    }, [params?.id])

    return (
        <>
            <h1>detail product</h1>
            {detailsprod?.name} <br />
            {detailsprod?.price} <br />
            {detailsprod?.type}
        </>

    )


}