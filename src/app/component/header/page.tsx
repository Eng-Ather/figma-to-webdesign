
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/app/lib/Logo.png"

const NaveBar = () => {
    return (
        // navbar main div
        <div className=" bg-primary w-[1920px] h-[92px] flex justify-around items-center ">

            {/* right side section for logo */}
            <div className="flex justify-around items-center bg-primary ">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={191}
                    height={134}
                />
            </div>

            {/* left side section for link and pages */}
            <div className=" flex justify-between items-center w-[737px] h-[60px]">
                <div>
                    <ul className="flex gap-[32px] text-white font-semibold">
                        <li> <Link href="/">Product</Link></li>
                        <li> <Link href="/">Solution</Link></li>
                        <li> <Link href="/">Resources</Link></li>
                        <li> <Link href="/"> Pricing </Link></li>
                    </ul>
                </div>

                <div>
                    <button className="bg-[#ffe492] w-[126px] h-[60px] rounded-lg">Login</button>
                </div>

            </div>

        </div>
    )
}

export default NaveBar