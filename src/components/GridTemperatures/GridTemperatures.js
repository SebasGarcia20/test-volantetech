import React, { useState } from 'react'
import './GridTemperatures.css'
const GridTemperatures = ({ temperature, tempUnits, day }) => {

    const [temp, setTemp] = useState(temperature)
    const [tempeUnits, setTempeUnits] = useState(tempUnits)

    const cambiarUnidad = () => {
        if (tempeUnits === 'F') {
            setTemp(((temp) - 32) * 0.5556);
            setTempeUnits('C');
        } else if (tempeUnits === 'C') {
            setTemp(((temp) * 1.8) + 32);
            setTempeUnits('F');
        }
    }

    return (
        <div >
            <h5 className='h5'>{day}</h5>
            <div className='body'>
                <span> Temperature: </span>
                <input disabled className='input-style-grid' value={temp} />
                <span> Units: </span>
                <input disabled className='input-style-grid' value={tempeUnits} />
                <button className='button-style-change-units ' onClick={cambiarUnidad} >Change units</button>
            </div>
        </div>
    )
}

export default GridTemperatures