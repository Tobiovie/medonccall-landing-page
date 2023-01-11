import {useState,createContext} from 'react'

const Contest=createContext(null)
const Group=(props)=>{
    const [ishover,setHovering]=useState(false)
    return (
        <div onMouseOut={()=>setHovering(false)} onMouseOver={()=>setHovering(true)} className={`group ${ishover?'addcolor':''}`}>
            {props.children}
        </div>
    )
}
export default Group