import Link from 'next/link';

import './globals.css';

export default function MainPage() {
    return(
        <div className="w-screen h-screen flex justify-center items-center flex-col ">
            <h1 className='text-hover text-5xl'>Hello World!</h1>
            <h2><Link href="/testPage">Page 2</Link></h2>
        </div>
    )
}