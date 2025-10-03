import Header from "../Header/Header"
import { useState, useEffect } from "react"
import './cats.css'
import { CatsType } from "../../types/productTypes"
import { useNavigate } from "react-router";
import { fetchAllCats } from "../../services/catsServices"
export default function Cats() {
    let navigate = useNavigate();
    const [cats, setCats] = useState<CatsType[]>()
    useEffect(() => {
        async function fetchCats() {
            const fetchedData = await fetchAllCats()
            setCats(fetchedData)
        }
        fetchCats()
    }, [])

    return (
        <>
            <h1>les chats </h1>
            <div className="cats">
                {cats?.map((item) => {
                    return (
                        <div key={item.id} >
                            <p> ID : {item?.id}</p>
                            <img src={item?.url} alt="" className="imgStyle" />
                            <p>width : {item.width}</p>
                            <p> height :{item.height}</p>
                            <button
                                onClick={() => {
                                    navigate(`/cats/${item?.id}`);
                                }}
                            >detail</button>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}