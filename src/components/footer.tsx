import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavigationMenuDemo } from "./navlinks";

export default function Footer() {
    return (
        <div>
            <footer className="text-blue-800 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-2xl font-extrabold  tracking-tight text-green-800 mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/home"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/About"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">About</Link>
                                </li>
                                <li>
                                    <Link href={"/contactus"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-2xl font-extrabold  tracking-tight text-green-800 mb-3">
                                SERVICES
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"#activities"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">Our Activities </Link>
                                </li>
                                <li>
                                    <Link href={"#programs"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium  tracking-tight">Our Programs</Link>
                                </li>
                                <li>
                                    <Link href={"#faci"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight"> Our Facilities</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-2xl font-extrabold   tracking-tight text-green-800 mb-3">
                                CONTACT US
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-mysubheading hover:text-blue-300 scroll-m-20 text-lg font-semibold  tracking-tight">CALL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">0330 2463589</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mysubheading hover:text-blue-300 scroll-m-20 text-lg font-semibold  tracking-tight">EMAIL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-[#28737d] hover:text-blue-300 scroll-m-20 text-md font-medium   tracking-tight">cpdcfaisalcantt18@gmail.com</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link href={"/home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myheading ">
                                <Image src={'/assest/logo1.png'} alt="logo" width={200} height={200} />

                            </Link>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-green-800">
                            <Image src={require('../../public/assest/logo1.png')} alt="logo" width={80} height={80} />
                            <span className="ml-3 text-xl">CPDC</span>
                        </a>
                        <p className="text-sm text-[#28737d] sm:ml-6 sm:mt-0 mt-4">
                            © 2023 CPDC | Created by<span className="ml-3 text-sm text-green-800">Daniyal</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-7 mt-4 justify-center sm:justify-start ">
                            <a className=" p-500">
                                <a href="https://www.facebook.com/profile.php?id=100093207275880">
                                    <FaFacebookF className="text-3xl hover:text-blue-700" />
                                </a>
                            </a>
                        </span>
                    </div>
                </div>
            </footer >

        </div >
    )
}