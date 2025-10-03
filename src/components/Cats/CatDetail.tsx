import { useParams } from "react-router"
import { useEffect, useState } from "react";
import './cats.css'
import { CatsType } from "../../types/productTypes";
import { fetchCatById } from "../../services/catsServices"

export default function CatDetail() {

    const [catDetail, setCatDetail] = useState<CatsType>()
    let params = useParams<{ id:  string}>()

    useEffect(() => {
        async function getData() {
            const fetchedData = await fetchCatById(params!.id!);
            setCatDetail(fetchedData);
        }
     getData();
    }, [params?.id]);

    return (
        <>
            l'id est {catDetail?.id}
            <img src={catDetail?.url} alt="" className="imgStyle" />
            height : {catDetail?.height}
            width :{catDetail?.width}
        </>

    )




}