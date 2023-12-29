'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingcard from './bestsellingprodectscard';

const Ouractivities = () => {
  const bestsell =
    [
      {
        src: "/assest/A1-01.jpg",
        alt: "A1",
        title: "Project Exhibition",
      }
      ,
      {
        src: "/assest/A3-01.jpg",
        alt: "A2",
        title: "Project Exhibition",
      }
      ,
      {
        src: "/assest/A2-01.jpg",
        alt: "A3",
        title: "Ozone dayd",

      }
      ,
      {
        src: "/assest/A4-01.jpg",
        alt: "A4",
        title: "Independence day",

      }
      ,
      {
        src: "/assest/A5-01.jpg",
        alt: "A5",
        title: "Mehfil e Milad",

      }
      ,
      {
        src: "/assest/A6-01.jpg",
        alt: "A6",
        title: "Mental Health Day",

      }
      ,
      {
        src: "/assest/A7-01.jpg",
        alt: "A7",
        title: "Health & hygiene Dayd",

      }
      ,
      {
        src: "/assest/A9-01.jpg",
        alt: "A8",
        title: "Health & hygiene Day",
      }
      ,
      {

        src: "/assest/A8-01.jpg",
        alt: "A9",
        title: "Technological Revolution",
      }
    ]
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id='activities' className="mb-[100px] mt-[100px]">
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Our Activities
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  )
}

export default Ouractivities
