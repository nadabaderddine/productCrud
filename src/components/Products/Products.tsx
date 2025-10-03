import { useEffect, useState } from "react"
import ProductItem from "../ProductItem/ProductItem"
import { Product, ProductType } from "../../types/productTypes"
import { Modal } from 'antd';
import Form from "../ProductForm/Form"
import Header from "../Header/Header";
import { fetchAllProducts } from '../../services/productsServices'
import { deleteProduct } from "../../services/productsServices";
import { fetchOneProduct } from "../../services/productsServices";
import { useNavigate } from "react-router";
import { Spin } from 'antd';

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameModified, setNameModified] = useState<string>("")
    const [priceModified, setPriceModified] = useState<number | undefined>()
    const [typeModified, setTypeModified] = useState<ProductType>(ProductType.fashion)
    const [loader, setLoader] = useState<boolean>(true)

   {console.log('+++++',loader)}

    let navigate = useNavigate();
    const showModal = (item: any) => {
        setIsModalOpen(true);
        setNameModified(item?.name)
        setPriceModified(item?.price)
        setTypeModified(item?.type)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function fetchProducts() {


try {
      // On simule un délai de 2 secondes
      await new Promise(resolve => setTimeout(resolve, 2000));
      const getProducts = await fetchAllProducts();
      setProducts(getProducts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);  
    }
  }
        fetchProducts()
      
        
    }, [])

    return (
        <>
        { loader ==true ? <Spin/> :
     
        <>
       
            <Header />
            <Form type="Add" products={products} setProducts={setProducts} />
            <div>
                
                {products.map((item) => {
                    return (
                        <div>
                            <ProductItem product={item} isModalOpen={isModalOpen}
                                nameModified={nameModified}
                                onClickEdit={() => showModal(item)}
                                onClickDelete={() => {
                                    deleteProduct(item?.id)
                                    setProducts(products.filter(prod => prod.id !== item.id))
                                }

                                }
                                onClickVisualiser={() => navigate(`/productsdetails/${item?.id}`)}

                            />
                            <Modal
                                title="Basic Modal"
                                closable={{ 'aria-label': 'Custom Close Button' }}
                                open={isModalOpen}
                                footer={null}
                                onCancel={handleCancel}
                            >
                                <p>vous pouvez modifier içi </p>
                                <Form
                                    closeModal={() => setIsModalOpen(false)}
                                    type="Update"
                                    products={products}
                                    setProducts={(productsList: Product[]) => { setProducts(productsList) }}
                                    defaultValues={{ id: item.id, name: nameModified, price: priceModified, selectedType: typeModified }}
                                    disabled
                                />
                            </Modal>
                        </div>
                    )
                })}
            </div>
             </>
}

        </>
           
    )
}
