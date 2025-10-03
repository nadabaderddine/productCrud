import { Product } from "../../types/productTypes"
import "./ProductItem.css"

interface ProductItemProps {
    product: Product
    isModalOpen: boolean
    nameModified: string
    onClickDelete: () => void
    onClickEdit: () => void
    onClickVisualiser :()=> void
}

export default function ProductItem({ product, onClickDelete, onClickEdit,onClickVisualiser, isModalOpen, nameModified }: ProductItemProps) {

    return (
        <div className="product-item">
            {product.name}
            {product.price}
            {product.type}
            <button onClick={() => onClickDelete()} >
                Delete
            </button>
            <button onClick={() => onClickEdit()} >
                Edit
            </button>
              <button onClick={() => onClickVisualiser()} >
                Visualiser
            </button>
        </div>
    )


}