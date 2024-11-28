import fs from "fs/promises"

export const ServerComponentTwo = async () => {
  const fileContent = await fs.readFile("src/app/components/server-component-two.tsx", "utf-8")
  return <>
    <h1>ServerComponentTwo</h1>
  </>
}