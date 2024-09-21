"use client"

import { useState } from "react";
import DeleteFileModal from "./DeleteFileModal";
import ChosenIcon from "./ChosenIcon";

const File = ({path} : {path : string}) => {

    const [open , setOpen] = useState(false)

    const pathArray = path.split(".")

    const fileType = pathArray[pathArray.length - 1]

    return (<>
        <div className="flex flex-row">
            <button onClick={()=>{
                setOpen(item => !item)
            }} className="p-3 rounded-sm m-2 flex flex-row gap-2 bg-red-500">{path} <ChosenIcon icon={`${fileType}`}/></button>
            <div className={`${open ? "flex" : "hidden"} flex-row gap-4 items-center justify-center`}>
                <DeleteFileModal path={path}/>
            </div>
        </div>
    </>);
}
 
export default File;