"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    console.log('My name ');
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contract",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];

    return (
        <div className=' flex justify-between - pt-4'>
            <div className=' font-bold text-xl'>
                <Link href='/'>Lamamia</Link>
            </div>
            <div className=' space-x-6'>
                {
                    links.map(link => (
                        <Link href={link.url} key={link.id}>{link.title}</Link>
                    ))
                }
                <button onClick={() => console.log("log out")}>Log out</button>
            </div>

        </div>
    )
}

export default Navbar