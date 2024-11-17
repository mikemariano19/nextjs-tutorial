"use client"

import { serverSideFunction } from "@/app/utils/server-utils";


export default function ClientRoutePage() {
    console.log("Client route rendered");
    const result = serverSideFunction();
    return (
        <>
            <h1>ClientRoutePage</h1>
            <p>{result}</p>
        </>
    )
}