"use client"

import { useState } from "react";
import DeleteFileModal from "./DeleteFileModal";

const File = ({path} : {path : string}) => {

    const [open , setOpen] = useState(false)

    return (<>
        <div className="flex flex-row">
            <button onClick={()=>{
                setOpen(item => !item)
            }} className="p-3 rounded-sm m-2 bg-red-500">{path}</button>
            <div className={`${open ? "flex" : "hidden"} flex-row gap-4 items-center justify-center`}>
                <DeleteFileModal path={path}/>
            </div>
        </div>
    </>);
}
 
export default File;