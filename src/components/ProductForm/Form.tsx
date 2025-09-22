import ProductInput from "../ProductInput/ProductInput"
import { useState } from "react"
import SelectForm from "../SelectForm/SelectForm"
import { Product, ProductType } from "../../types/productTypes"


interface FormProps {
    products: Product[];
    setProducts: (product: Product[]) => void;
    type: 'Add' | 'Update',
    defaultValues?: { name: string, price: number | undefined, selectedType: ProductType }
    disabled?: boolean
    closeModal?: () => void
}

export default function Form({ products, setProducts, defaultValues, disabled, type, closeModal }: FormProps) {
    const [name, setName] = useState<string>(defaultValues?.name ?? "")
    const [price, setPrice] = useState<number | undefined>(defaultValues?.price ?? undefined)
    const [selectType, setSelectType] = useState<ProductType>(defaultValues?.selectedType ?? ProductType.Fashion)
    const typeOptions = [ProductType.Fashion, ProductType.Grocery]
    console.log("product fils", products)
    return (
        <>
            <ProductInput label="name" name="name" type="text" value={name} onChange={setName} disabled={disabled} />
            <ProductInput label="price" name="price" type="number" value={price} onChange={(val) => setPrice(Number(val))} />
            <SelectForm label="Choose an option" value={selectType} onChange={setSelectType} options={typeOptions} />
            <br />
            <button onClick={() => {
                if (type === 'Add') {
                    const newProduct = { name, price, type: selectType }
                    // ajouter l'element dans le tableau state 
                    setProducts([...products, newProduct])
                } else {
                    let array: Product[] = [];
                    products.forEach((item) => {
                        if (item.name === defaultValues?.name) {
                            const newitem = { price, type: selectType }
                            array.push({ ...item, ...newitem })
                        } else {
                            array.push(item)
                        }

                    })
                    setProducts(array)
                    closeModal && closeModal();
                }
            }}>{type === 'Add' ? 'Ajouter' : 'Updater'}</button>
        </>
    )
}