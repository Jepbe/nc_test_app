'use client';

import Link from "next/link"
import { useState } from "react"

export default function() {
    const [test, setTest] = useState(0);
    if (test >= 10) {
        window.location.href = "localhost:3000/testPage2"
    } 
    
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col ">
            <h1>Page 2</h1>
            <h2><Link href="/" className="text-hover">Go back...</Link></h2>
            <button className="p-2 rounded bg-light" onClick={() => setTest(test + 1) }>Click here: {test}</button>
        </div>
    )
}


// 0 0 0 1px #ffffff15
// br 8px