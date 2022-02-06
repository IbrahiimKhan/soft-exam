import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const RadioBox = ({prices,handleFilters})=>{
    const [value, setValue] = useState(0)


    const handleChange = event =>{
       handleFilters(event.target.value);
        setValue(event.target.value)

    }

    return prices.map((p, i) => (
        <div key={i}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio"
                className="mr-3 ml-4"
            />
            <label className="form-check-label form-check-nice">{p.name}</label>
        </div>
    ));
}

export default RadioBox;