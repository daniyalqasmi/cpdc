import Image from 'next/image'
import React from 'react'

const Welcome = () => {
    return (
        <div className='mb-[100px] mt-[50px]'>
            <section className="text-black body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap md:w-1/2 mx-auto">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="scroll-m-20 text-xl font-semibold  text-black">
                                Welcome to
                            </h2>
                            <h1 className="scroll-m-20 text-3xl font-semibold  first:mt-0 text-[#28737d]">
                                Cantt Public Degree College
                            </h1>
                            <div className="flex mt-2 justify-center mb-15">
                                <div className="w-full h-1 rounded-full bg-myheading inline-flex" />
                            </div>

                            <p className="leading-relaxed mb-4">
                                Step into the distinguished halls of Cantt Public Degree College, an institution held in high regard under the esteemed administration of the Cantonment Board Faisal and the Ministry of Defense. A beacon of academic excellence, we specialize in intermediate education across diverse fields, including pre-medical, pre-engineering, and computer science.
                            </p>

                        </div>
                        <Image src={require("../../public/assest/w1.jpeg")} alt='w1' width={450}
                            height={400} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Welcome
