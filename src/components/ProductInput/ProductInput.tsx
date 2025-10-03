type Inputitem = {
    label: string
    name: string
    value?: string | number
    type: 'text' | 'number'
    disabled? : boolean
    onChange?: (newValue: string) => void;
}


export default function ProductInput({ label, name, value, onChange,type,disabled }: Inputitem) {
    return(
  <label>
        {label}
        <input name={name} type={type}  disabled={disabled} value={value} onChange={(e) => { onChange && onChange(e.target.value) }}/>
    </label>
    )
  
}
