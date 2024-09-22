"use client"

import { useState } from "react";

interface Props { 
    path : string
}

const DeleteFileModal = ({path} : Props) => {
    
    const [open , setOpen] = useState(false)
    
    return (<>
        <div className={`h-[300px] ${open ? "block" : "hidden"} w-[400px] absolute left-[38%] top-[30%] bg-slate-500 rounded-md`}>
            <button onClick={()=>{
                setOpen(false)
            }} className="flex top-0 left-[50%] bg-red-600 m-2 p-2 rounded-md text-white">Close</button>
            <div className="flex items-center gap-2 flex-col justify-center w-[100%] text-black h-[50%]">
                <button onClick={()=>{
                    fetch("/api/file" , {method : "DELETE" , body : JSON.stringify({path})})
                    .then(res => res.json())
                    .then(data => {
                        window.location.reload()
                    })
                }} className="p-2 rounded-sm bg-slate-50">Delete File</button>
            </div>
        </div>
        <button onClick={()=>{
            setOpen(item => !item)
        }} className="flex p-2 rounded-md bg-red-500">Delete File</button>
    </>);
}
 
export default DeleteFileModal;