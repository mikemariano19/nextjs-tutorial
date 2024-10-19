'use client'


export default function ErrorBounderies({error, reset}: {error: Error, reset: () => void}){

    return <p>{error.message}<button onClick={reset}>Try Again!</button></p>
}