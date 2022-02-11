import './input.css';
import { useRef } from 'react';


function Input() {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const btnRef = useRef(null)

    return <div className='input-container'>
        <input
            ref={input1Ref}
            type="text"
            className='input1'
            onChange={(event) => {
                const value = event.target.value;
                if (value.includes("0") || value.includes("1") || value.includes("2") || value.includes("3") || value.includes("4") || value.includes("5") || value.includes("6") || value.includes("7") || value.includes("8") || value.includes("9")) {
                    input2Ref.current.focus()
                }
            }}
        />
        <input
            ref={input2Ref}
            type="text"
            className='input2'
            onChange={(event) => {
                const value = event.target.value;
                if (value.includes("0") || value.includes("1") || value.includes("2") || value.includes("3") || value.includes("4") || value.includes("5") || value.includes("6") || value.includes("7") || value.includes("8") || value.includes("9")) {
                    input3Ref.current.focus()
                }
            }}

        />
        <input
            ref={input3Ref}
            type="text"
            className='input3'
            onChange={(event) => {
                const value = event.target.value;
                if (value.includes("0") || value.includes("1") || value.includes("2") || value.includes("3") || value.includes("4") || value.includes("5") || value.includes("6") || value.includes("7") || value.includes("8") || value.includes("9")) {
                    input4Ref.current.focus()
                }
            }}
        />
        <input
            ref={input4Ref}
            type="text"
            className='input4'
        />
    </div>
}


export { Input };