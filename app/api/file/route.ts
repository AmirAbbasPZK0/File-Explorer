import { NextResponse } from "next/server";
import fs from 'fs'


export async function POST(req : Request) {
    const {fileName , path} = await req.json()
    fs.writeFileSync(`./app/${path}/${fileName}`, "")
    return NextResponse.json({message : "Adding Operation was Successfull"})

}