"use client"

import {useState} from "react";
import {ClientComponentTwo} from "@/app/components/client-component-two";

export const ClientComponentOne = () => {
  const [name, setName] = useState("Batman");
  return <>
    <h1>ClientComponentOne</h1>
    <ClientComponentTwo />
  </>
}