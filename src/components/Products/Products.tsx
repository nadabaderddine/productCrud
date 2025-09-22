import { useState } from "react"
import ProductItem from "../ProductItem/ProductItem"
import { Product, ProductType } from "../../types/productTypes"
import ProductInput from "../ProductInput/ProductInput"
import { Modal } from 'antd';
import Form from "../ProductForm/Form"
export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameModified, setNameModified] = useState<string>("")
    const [priceModified, setPriceModified] = useState<number | undefined>()
    const [typeModified, setTypeModified] = useState<ProductType>(ProductType.Fashion)

    const showModal = (item: any) => {
        console.log("222", item)
        setIsModalOpen(true);
        setNameModified(item?.name)
        setPriceModified(item?.price)
        setTypeModified(item?.type)
    };


    const handleOk = () => {

        // je dois chercher l'élement a modifer dans le tavleau product a partir de nom vu que le nom estunique
        // trouver l'element le modifier ensuite mettre ajour le tableau avec le nouveau element a jour
        let array: Product[] = [];
        products.forEach((item) => {
            if (item.name === nameModified) {
                const newitem = { price: priceModified }
                array.push({ ...item, ...newitem })
            } else {
                array.push(item)

            }

        })
        setProducts(array)
        setIsModalOpen(false);
        //setName(nameModified)
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log("product parent", products)
    return (
        <>
            <p>nada product</p>
            <Form type="Add" products={products} setProducts={setProducts}
            //setProducts={(productsList: Product[]) => { setProducts(productsList) }} 
            />

            {/* <ProductInput label="name" name="name" type="text" value={name} onChange={setName} />
            <ProductInput label="price" name="price" type="number" value={price} onChange={(val) => setPrice(Number(val))} />  */}
            {/* <SelectForm label="Choose an option" value={selectedType} onChange={setSelectedType} options={typeOptions} /> */}
            {/* <br />
                <button onClick={() => {
                    const newProduct = { name, price, type: selectedType }
                    // ajouter l'element dans le tableau state 
                    setProducts([...products, newProduct])

                }}>Ajouter</button> */}
            <div>
                {products.map((item) => {

                    return (
                        <div>

                            <ProductItem product={item} isModalOpen={isModalOpen}
                                nameModified={nameModified}

                                onClickEdit={() => showModal(item)}
                                onClickDelete={() => setProducts(products.filter((elm) => elm.name !== item.name))} />
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
                                    defaultValues={{ name: nameModified, price: priceModified, selectedType: typeModified }}
                                    disabled
                                />


                            </Modal>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
