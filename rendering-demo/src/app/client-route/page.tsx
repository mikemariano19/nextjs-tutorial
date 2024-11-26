"use client"

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../components/theme-provider";
import {clientSideFunction} from "@/app/utils/client-utils";


export default function ClientRoutePage() {
    const theme = useTheme()
    const result = clientSideFunction()

    return (
        <>
            <h1>
                Client Route {result}
            </h1>
        </>
    )
}