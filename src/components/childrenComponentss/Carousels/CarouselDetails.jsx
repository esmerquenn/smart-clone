import { Carousel, Image } from 'antd'
import React from 'react'

function CarouselDetails({isBigDesktop, banner1}) {
  return (
    <Carousel className="carusel_details" autoplay autoplaySpeed={4000} style={{ width:  `${ isBigDesktop ? '200px': '160px'}` }}>
    <div>
      <Image
        src={banner1}
        alt="Banner 1"
        style={{
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
    </div>
    <div>
      <Image
        src={banner1}
        alt="Banner 2"
        style={{
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
    </div>
    <div>
      <Image
        src={banner1}
        alt="Banner 3"
        style={{
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
    </div>
  </Carousel>
  )
}

export default CarouselDetails
