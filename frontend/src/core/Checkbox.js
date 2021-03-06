import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Checkbox = ({categories, handleFilters}) => {

     const [checked, setChecked] = useState([])
    
     const handleToggle = c =>() =>{
                const currentCategoryId = checked.indexOf(c) // return first index of-1
                const newCheckedCategoryId = [...checked]
                //if currently checked was not already in checked state > push
                //else  pull/take off
                if(currentCategoryId === -1){
                    newCheckedCategoryId.push(c)
                }
                else{
                newCheckedCategoryId.splice(currentCategoryId, 1)

                }
                //console.log(newCheckedCategoryId);
                setChecked(newCheckedCategoryId)
                handleFilters(newCheckedCategoryId,)
     }



    return categories.map((c,i)=> (
        <>
        <li key={i} className="list-unstyled">
            <input value={checked.indexOf(c._id === -1)} onChange={handleToggle(c._id)} type="checkbox" className='form-check-input'  name="" id="" />
            <label style={{marginLeft:"0.3rem"}} htmlFor="" >{c.name}</label>
        </li>
        </>
    ))
}

export default Checkbox
