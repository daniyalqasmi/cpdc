
import BestSellingcard from "./bestsellingprodectscard";

export default function Facilities() {
    const bestsell =
        [
            {
                src: "/assest/Computerlab-01.jpg",
                alt: "m1",
                title: "computer lab",
            },
            {
                src: "/assest/Library--01.jpg",
                alt: "m2",
                title: "library",
            },
            
        ]
    return (
        <div className="mb-[100px] mt-[100px]">
            <div id="faci" className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
                    Our Facilities
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-[20px]">
                {
                    bestsell.map((items, i) => (
                        <BestSellingcard
                        key={i}
                            src={items.src}
                            alt={items.alt}
                            title={items.title}
                            
                        />
                    ))
                }
            </div>


        </div>
    )
} 