import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVehicleLocation} from '../redux/actions'

export default function Sidebar() {
    const data= useSelector(state=>state.data)
    const dispatch= useDispatch()
    
    // for no effect of clicking button again
    const [buttonFlag,setButtonFlag]= useState(true)

    const clickHandler=()=>{
        if(buttonFlag===true){
            dispatch(addVehicleLocation(data._id))
            setButtonFlag(false)
        }
    }
    useEffect(() => {
        setButtonFlag(true)
    }, [])

    return (
        <div className='sidebar'>
            <div className='mt-5 h2'>Select Vehicle</div>
            {data && <div onClick={()=>clickHandler()} className='btn btn-primary my-5'>Vehicle ID: {data._id}</div>}
        </div>
    )
}
