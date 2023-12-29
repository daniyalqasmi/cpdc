import Image from "next/image";
import Link from "next/link";

export default function Programs() {
    return (
        <div id="programs" className="mb-[100px] mt-[100px]">
            <div className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
                    Our Programs
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/contactus"}>
                        <Image src={require("../../public/assest/PE-1-01.jpg")}
                            alt="maincourse"
                            width={350}
                            height={350}
                            className="rounded-xl duration-500 group-hover:scale-125"
                        />

                        <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Pre-Engineering</h1>
                        </div>
                        <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Pre-Engineering</h1>
                        </div>
                    </Link>
                </div>
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/contactus"}>
                        <Image src={require("../../public/assest/PM-1-01.jpg")}
                            alt="family size"
                            width={350}
                            height={350}
                            className="rounded-xl duration-500 group-hover:scale-125"
                        />

                        <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Pre-Medical</h1>
                        </div>
                        <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Pre-Medical</h1>
                        </div>
                    </Link>
                </div>
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/contactus"}>
                        <Image src={require("../../public/assest/CS1-01.jpg")}
                            alt="sandwich"
                            width={350}
                            height={350}
                            className="rounded-xl duration-500 group-hover:scale-125"
                        />

                        <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Computer Science</h1>
                        </div>
                        <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight  bg-green-500/40 text-center text-white w-full">
                            <h1 className="uppercase">Computer Science</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}