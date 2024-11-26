import { serverSideFunction } from "../utils/server-utils";
import {clientSideFunction} from "@/app/utils/client-utils";


export default function ServerRoutePage() {
    console.log("Server route rendered")
    const result = serverSideFunction();
    const clientSide = clientSideFunction();
    return(
        <>
            <h1>ServerRoutePage</h1>
            <p>{result}</p>
            <p>{clientSide}</p>
        </>
    )
}