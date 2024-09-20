"use client"

import { useEffect, useState } from "react"
import FolderList from "./FolderList"
import FileModal from "./FileModal"
import FolderModal from './FolderModal'

interface Props {
    path : string ,
    fileName : string | null
    folderName : string | null
}


const OpenList = ({path , fileName , folderName} : Props) => {

    const [data , setData] = useState([])

    const [open , setOpen] = useState(false)
    
    useEffect(()=>{
        fetch("/api/folder-list" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({path : `./app/${path}`})
        }).then(res => {
            return res.json()
        }).then(data => 
            setData(data)
        )
    },[])

    return (<>
        <div className="p-4 w-[100%]">
            <button onClick={()=>{
                setOpen(item => !item)
            }} className="flex items-center p-2 rounded-sm w-[100%] bg-blue-500">{path}</button>
            <div className={` ${open ? "block" : "hidden"}`}>
                {data.map((item : any , index) => (
                    <div className="gap-2" key={index}>
                        {!item.includes(".") ? <FolderList path={`${path}/${item}`} folderName={item}/> : <div className="flex m-3 items-center p-2 gap-2 rounded-sm bg-red-500">{item}</div>}
                    </div>
                ))}
            </div>
            <div className={`${open ? "flex" : "hidden"} items-cente gap-2 justify-center`}>
                <FileModal path={path}/>
                <FolderModal path={path}/> 
            </div>
        </div>
    </>);
}
 
export default OpenList;