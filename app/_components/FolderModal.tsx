"use client"

import { useState } from "react";

interface Props { 
    path : string
}

const FolderName = ({path} : Props) => {
    
    const [open , setOpen] = useState(false)

    const [folderName , setFolderName] = useState("")
    
    return (<>
        <div className={`h-[300px] ${open ? "block" : "hidden"} w-[400px] absolute left-[38%] top-[30%] bg-slate-500 rounded-md`}>
            <button onClick={()=>{
                setOpen(false)
            }} className="flex top-0 left-[50%] bg-red-600 m-2 p-2 rounded-md text-white">Close</button>
            <div className="flex items-center gap-2 flex-col justify-center w-[100%] text-black h-[50%]">
                <h1 className="p-2 text-[20px]">Folder Name</h1>
                <input onChange={e => setFolderName(e.target.value)} type="text" className="p-2 rounded-sm " />
                <button onClick={()=>{
                    fetch("/api/folder" , {method : "POST" , body : JSON.stringify({folderName , path})})
                    .then(res => res.json())
                    .then(data => {
                        window.location.reload()
                    })
                }} className="p-2 rounded-sm bg-slate-50">Create Folder</button>
            </div>
        </div>
        <button onClick={()=>{
            setOpen(item => !item)
        }} className="flex p-2 rounded-md bg-green-500">Create Folder</button>
    </>);
}
 
export default FolderName;