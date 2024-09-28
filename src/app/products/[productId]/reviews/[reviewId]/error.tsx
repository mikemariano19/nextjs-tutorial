'use client'

export default function ErrorBounderies({error, reset}: {error: Error, reset: () => void}){
    return <h1>{error.message}<button onClick={reset}>Try Again!</button></h1>
}