'use client'

export default function ErrorBounderies({error}: {error: Error}){
    return <h1>{error.message}</h1>
}