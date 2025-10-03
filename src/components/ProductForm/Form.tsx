import ProductInput from "../ProductInput/ProductInput"
import { useState } from "react"
import SelectForm from "../SelectForm/SelectForm"
import { Product, ProductType } from "../../types/productTypes"
import { createProduct, updateProduct } from '../../services/productsServices'

interface FormProps {
    products: Product[];
    setProducts: (product: Product[]) => void;
    type: 'Add' | 'Update' | 'visualiser',
    defaultValues?: { id?: number, name?: string, price: number | undefined, selectedType: ProductType }
    disabled?: boolean
    closeModal?: () => void
}
export default function Form({ products, setProducts, defaultValues, disabled, type, closeModal }: FormProps) {



    const [name, setName] = useState<string>(defaultValues?.name ?? "")
    const [price, setPrice] = useState<number | undefined>(defaultValues?.price ?? undefined)
    const [selectType, setSelectType] = useState<ProductType>(defaultValues?.selectedType ?? ProductType.fashion)
    const typeOptions = [ProductType.fashion, ProductType.grocery]
    console.log('products', products)

    return (
        <>
            <ProductInput label="name" name="name" type="text" value={name} onChange={setName} disabled={disabled} />
            <ProductInput label="price" name="price" type="number" value={price} onChange={(val) => setPrice(Number(val))} />
            <SelectForm label="Choose an option" value={selectType} onChange={setSelectType} options={typeOptions} />
            <br />
            <button onClick={async () => {

                if (type === 'Add') {
                    const newProduct = await createProduct(
                        { name, price, type: selectType }
                    )
                    // ajouter l'element dans le tableau state 
                    setProducts([...products, newProduct])
                }

                else if (type === "Update" && defaultValues?.id) {
                    const modifiedData = await updateProduct(defaultValues!.id, {
                        name: name,
                        price: Number(price),
                        type: selectType,
                    });



                    setProducts(products.map(item => item?.id === modifiedData?.id ? modifiedData : item))
                    //setProducts([...products, modifiedData])

                    closeModal && closeModal();
                }

                else {
                    disabled = true
                }
            }}>



                {type === 'Add' ? 'Ajouter' : 'Updater'}



            </button>
        </>
    )
}