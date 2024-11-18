"use client"

import React from "react";
import { serverSideFunction } from "@/app/utils/server-utils";


export default function ClientRoutePage() {
    console.log("Client route rendered");
    const result = serverSideFunction();
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
            <h1>ClientRoutePage</h1>
            <p>{result}</p>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </>
    )
}