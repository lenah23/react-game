import './input.css';

function Input() {
    return <input type="text" className='input'/>
}

function InputsRow() {
    return <div className='input-container'>
    <Input />
    <Input />
    <Input />
    <Input />
    </div>
}

export { Input, InputsRow };