
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/lib/Logo.png"
import copyright from "@/app/lib/copyright.png"



const Footer = () => {
    return (
        <div className="bg-primary w-[1920px] h-[461px] pt-[140px] pb-[32px] px-[220px]">

            <div className=" text-white flex justify-between items-center w-[1480px] h-[289px]  ">
                {/* fotter detail and pages link box */}
                <div className="  text-white flex justify-between items-center w-[1480px] h-[169px]">
                    <div className=" w-[259px] h-[169px] flex flex-col justify-between  ">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={191}
                            height={34}
                        />
                        <p className=" w-[240px] h-[120] font-Inter font-normal text-[18px] leading-[30px] trackking-[-0.02em]">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>

                    <div className=" flex flex-col justify-between w-[259px] h-[127px]  ">
                        <Link href="/" className="font-bold">Product</Link>
                        <Link href="/" className="text-[#FFE492] text-[16px] tracking-[-2%] font-Inter font-normal">Overview</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Pricing</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Customer Stories</Link>
                    </div>

                    <div className=" flex flex-col justify-between w-[259px] h-[130px]  ">
                        <Link href="/" className="font-bold">Resources</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Blog</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Guides & Tutorials</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Help Center</Link>
                    </div>

                    <div className=" flex flex-col justify-between w-[259px] h-[130px]  ">
                        <Link href="/" className="font-bold">Company</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">About us</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Careers</Link>
                        <Link href="/" className="text-[16px] tracking-[-2%] font-Inter font-normal">Media Kit</Link>

                    </div>
                </div>



            </div>

            {/* copy reight box */}
            <div className=" w-[1480px] h-[20px]">
                <Image
                    src={copyright}
                    alt="copy right image"
                    width={1480}
                    height={20}
                />
            </div>
        </div>
    )
}

export default Footer