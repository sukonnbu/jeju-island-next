export default function Checkbox({ children, value, onChange, checked }) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                checked={checked === value}
                onChange={(e) => {onChange(e.target.value)}}
            />
        {children}
        </label>
    );
}