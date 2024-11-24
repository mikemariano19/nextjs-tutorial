"use client"

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../components/theme-provider";


export default function ClientRoutePage() {
    const theme = useTheme()

    return (
        <>
            <h1 style={{
                color: theme.colors.secondary
            }}>
                ClientRoutePage
            </h1>
        </>
    )
}