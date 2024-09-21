import { NextResponse } from "next/server";
import fs from 'fs'


export async function POST(req : Request) {
    const {fileName , path} = await req.json()
    fs.writeFileSync(`./app/${path}/${fileName}`, "")
    return NextResponse.json({message : "Adding Operation was Successfull"})


}

export async function DELETE(req : Request){
    
    const {path} = await req.json()
    
    fs.unlink(`./app/${path}` , () => {
        console.log("Error")
    })

    return NextResponse.json({message : "File Deleted Successfully"})

}