import './random-nums.css';
import { createContext, useContext, useState } from 'react'


function RandomNum() {
    const [rnd, setRnd] = useState("*");

    return <div className='randomnum' onClick={() => {
        setRnd(() => {
            let arr = [];
            let rundomnumber;
            let max = 10;
            let i = 0;
            while (i <= 10) {
                rundomnumber = Math.floor(Math.random() * max);
                if (arr.indexOf(rundomnumber) == -1) {
                    arr.push(rundomnumber);
                }
                i++
            } return rundomnumber
        })
    }}>{rnd}</div>
}

function RundomNumsRow() {
    return <div className='rndnumsrow'>
        <RandomNum />
        <RandomNum />
        <RandomNum />
        <RandomNum />
    </div>
}

export { RandomNum, RundomNumsRow };