interface Props {
  label: string
  type: string
  name: string
  placeholder: string,
  value: string | number,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({ label, type, name, placeholder, value, handleInputChange }: Props) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  )
}
