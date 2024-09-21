"use client"

import { useEffect, useState } from "react"
import FolderList from "./FolderList"
import FileModal from "./FileModal"
import FolderModal from './FolderModal'
import DeleteFolderModal from "./DeleteFolderModal"
import File from "./File"

interface Props {
    path : string
}


const OpenList = ({path} : Props) => {

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
            }} className="flex items-center p-2 rounded-sm bg-blue-500">{path}</button>
            <div className={` ${open ? "block" : "hidden"}`}>
                {data.map((item : any , index) => (
                    <div className="gap-2" key={index}>
                        {!item.includes(".") ? <FolderList path={`${path}/${item}`}/> : <File path={`${path}/${item}`}/>}
                    </div>
                ))}
            </div>
            <div className={`${open ? "flex" : "hidden"} items-cente gap-2 justify-center`}>
                <FileModal path={path}/>
                <FolderModal path={path}/>
                <DeleteFolderModal path={path}/>
            </div>
        </div>
    </>);
}
 
export default OpenList;