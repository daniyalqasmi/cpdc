import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-myheading mb-8" >
                            About <span className="font-bold text-mysubheading">Cantt Public Degree College</span>

                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-mytext align-text-top">
                            Step into the distinguished halls of <span className='font-bold text-myheading'>Cantt Public Degree College</span>, an institution held in high regard under the esteemed administration of the Cantonment Board Faisal and the Ministry of Defense. A beacon of academic excellence, we specialize in intermediate education across diverse fields, including pre-medical, pre-engineering, and computer science.
                            <br />
                            <br />
                            Our unwavering commitment to providing top-notch education extends beyond the confines of textbooks. We aspire to cultivate well-rounded individuals who not only excel academically but also possess the skills and mindset for future success. At <span className='font-bold text-myheading'>Cantt Public Degree College</span>, we believe in shaping the future leaders and innovators of tomorrow.
                            <br />
                            <br />
                            Central to our philosophy is the dedication to fostering a holistic learning environment. True growth transcends traditional classrooms, and we achieve this through a robust emphasis on co-curricular activities. We understand that education goes beyond academic knowledge; it encompasses a wide range of skills and experiences that shape individuals into dynamic contributors to society.
                            <br />
                            <br />
                            Embark on a transformative journey with us at <span className='font-bold text-myheading'>Cantt Public Degree College</span>. Our commitment to excellence, coupled with a supportive and enriching environment, ensures that students receive an education that goes beyond rote learning. Join us in shaping a future where academic prowess, character development, and a passion for learning seamlessly come together.
                            <br />
                            <br />
                            Welcome to <span className='font-bold text-myheading'>Cantt Public Degree College</span>, where the pursuit of knowledge is harmoniously coupled with a commitment to holistic development
                        </p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Link href={"/"} className=" text-xl">
                        <Image src={require('../../../public/assest/logo1.png')} alt="logo" width={340} height={340} />
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page
