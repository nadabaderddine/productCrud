import { ProductType } from "../../types/productTypes"

type selectedtypeFils = {
    label: string
    value: ProductType
    onChange: (newValue: ProductType) => void

    options: any[]
}

export default function SelectForm({ label, value, onChange, options }: selectedtypeFils) {
    return (
        <label>{label}
            <select value={value}
                onChange={(e) => onChange(e.target.value as ProductType)}>

                {options.map((item) => {
                    return (
                        <option value={item}>{item}</option>
                    )
                })}
            </select>
        </label>
    )


}