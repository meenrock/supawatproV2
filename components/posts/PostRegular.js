import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const PostRegular = () => {

    const POSTSELECTOR = [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "Documentation", href: "https://my-documentation-eta.vercel.app/" },
      ];

    const ImageLinker = 'image';

    return (
        <>
            <div className="grid">
                <a href="https://nextjs.org/docs" className="card">
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                    
                </a>
            </div>
        </>
    )
}