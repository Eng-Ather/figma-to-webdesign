
import React from "react";
import Image from "next/image";
import topboximage from "@/app/lib/topboximage.png"
import Textblock from "@/app/lib/Textblock.png"
import Textblock2 from "@/app/lib/Textblock2.png"
import middleboximage from "@/app/lib/middleboximage.png"
import lastboxleftimage from "@/app/lib/lastboxleftimage.png"
import lastblockrightimage from "@/app/lib/lastblockrightimage.png"






const HeroSection = () => {
    return (
        // main box of hero sections
        <div className=" w-[1920px] ">
            {/* top box  */}
            <div className=" bg-primary py-[140px] flex justify-center items-center">

                <div className=" flex flex-col justify-between w-[656px] h-[361px]">
                    <div className="w-[656px] h-[238px]">
                        <Image
                            src={Textblock}
                            alt="image"
                            width={656}
                            height={238}
                        />
                    </div>

                    <div>
                        <button className="bg-[#4F9CF9] text-white rounded-[8px] p-5 gap-10 w-[219px] h-[63px]"> Try White Space Free</button>
                    </div>
                </div>

                <div>
                    <Image
                        src={topboximage}
                        alt="image"
                        width={824}
                        height={549}
                    />
                </div>
            </div>

            {/* middel box */}
            <div className="flex flex-col gap-60 py-14 w-[1920px] h-[1588px]">

                <div className="flex justify-between w-[1480px] h-[547px]  mx-auto">
                    <div className="flex flex-col justify-between w-[672px] h-[411px]">
                        <div>
                            <Image
                                src={Textblock2}
                                alt="image"
                                width={672}
                                height={288}
                            />
                        </div>
                        <div>
                            <button className="bg-[#4F9CF9] text-white w-[201px] h-[63px] rounded-[6px] py-5 px-10">Get Started</button>
                        </div>

                    </div>

                    <div className=" w-[748px] h-[547px]">
                        <Image
                            src={middleboximage}
                            alt="image"
                            width={748}
                            height={547} />
                    </div>

                </div>
                {/* last box  */}
                <div className=" flex gap-60 items-center w-[1480px] h-[661px] mx-auto">

                    <div className="w-[710px] h-[661px]">
                        <Image
                            src={lastboxleftimage}
                            alt="image"
                            width={710}
                            height={661}
                        />
                    </div>

                    <div className=" flex flex-col justify-between w-[670px] h-[294px]">
                        <div><Image
                            src={lastblockrightimage}
                            alt="image"
                            width={670}
                            height={171}
                        /></div>
                        <div className="bg-[#4F9CF9] text-white py-5 px-10 rounded-[6px] w-[186px] h-[63px]">
                            <button>
                                try it now 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HeroSection