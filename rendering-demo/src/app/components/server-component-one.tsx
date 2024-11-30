import fs from "fs/promises"
import {ServerComponentTwo} from "@/app/components/server-component-two";
import {ClientComponentOne} from "@/app/components/client-component-one";

export const ServerComponentOne = async () => {
  const fileContent = await  fs.readFile("src/app/components/server-component-one.tsx", "utf-8")
  return <>
    <h1>ServerComponentOne</h1>
  </>
}
