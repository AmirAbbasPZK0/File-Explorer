import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(req : Request){
    const {path} = await req.json()
    try{
        const result = fs.readdirSync(path)
        return NextResponse.json(result)
    }catch(err){
        console.log(err)
    }
}