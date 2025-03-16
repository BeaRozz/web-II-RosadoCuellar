export default function MyInput(params) {
    const {type, placeholder, value, onChange, name} = params;
    return (
        <input className="myInput" name={name} type={type} placeholder={placeholder} 
        value={value} onChange={onChange}/>
    );
}