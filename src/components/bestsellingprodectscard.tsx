import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ImHeart } from "react-icons/im"
import { PiShoppingBagFill } from "react-icons/pi"


export default function BestSellingcard(
    {
        src,
        alt,
        title,
    }:
        {
            src: string,
            alt: string,
            title: string,
        }) {
    return (
        <div className="max-w-[400px] h-[25rem]  p-4 mx-auto shadow-gray-500 shadow-md relative rounded-xl  group bg-[#28737d] gap-2">
            
            {/* image */}
            <div className="block h-[23rem rounded overflow-hidden] rounded-xl">
                <Image src={src} alt="kuch nahi" width={400} height={400} />
            </div>
            {/* typography */}
            <div className="card-body">
                {/* title */}
                <h2 className="mt-5 scroll-m-20  text-lg uppercase font-extrabold tracking-tight transition-colors first:mt-0 text-white line-clamp-1 text-center">{title}</h2>
                
            </div>
            
            
            
        </div>
    )
} 