import { NextResponse } from "next/server";
import fs from 'fs'


export async function POST(req : Request){
    const {folderName , path} = await req.json()
    fs.mkdirSync(`./app/${path}/${folderName}`)
    return NextResponse.json({message : "Folder Created Successfully"})
}

export async function DELETE(req : Request){
    const {path} = await req.json()
    fs.rmdirSync(`./app/${path}`)
    return NextResponse.json({message : "Folder Removed Successfully"})
}