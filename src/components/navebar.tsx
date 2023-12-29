import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavigationMenuDemo } from "./navlinks";
import Image from "next/image";

export default function Navbar() {
    return (
        <div><div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="p-0 text-2xl lg:hidden bg-white text-black">
                        <GiHamburgerMenu />
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[#28737d] ">
                        <li><Link href={"/home"}>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Programs</summary>
                                <ul className="p-2">
                                    <li><Link href={"/contactus"}>Computer Science</Link></li>
                                    <li><Link href={"/contactus"}>Pre-Medical</Link></li>
                                    <li><Link href={"/contactus"}>Pre-Engineering</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link href={"/About"}>About</Link></li>
                        <li><Link href={"/contactus"}>Contact Us</Link></li>
                    </ul>
                </div>
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-green-800">
                    <Link href={"#"} ><Image src={require('../../public/assest/logo1.png')} alt="logo" width={100} height={100} className="p-2 hidden lg:block" /></Link>
                    <span className="ml-3 text-xl p-2 hidden lg:block">CANTT PUBLIC DEGREE COLLEGE</span>
                </a>
            </div>
            <div className="navbar-center ">
                <Link href={"#"} ><Image src={require('../../public/assest/logo1.png')} alt="logo" width={80} height={80} className=" block lg:hidden" /></Link>
                <div className="hidden lg:block">
                    <NavigationMenuDemo />
                </div>
            </div>
            {/* <div className="navbar-end">
            </div> */}

        </div>
        </div>
    )
}

