import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Img1 from '../assets/Img1.png'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'
import Img6 from '../assets/Img6.jpg'

const Home = () => {
    const settings = {
        infinite:true,
        autoplay:true,
        speed: 1000,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        pauseOnHover:false,
        className: "center",
        swipeToSlide:true,
        focusOnSelect:true,
      };

  return (
    <div className=''>

      <div className='cursor-pointer '>
        <Slider {...settings}>
        <div>
            <img src={Img1} alt='' className='h-[100px] '/>
          </div>
          <div>
            <img src={Img2} alt='' className='h-[100px] w-[100%]'/>
          </div>
          <div>
            <img src={Img3} alt='' className='h-[100px]'/>
          </div>
          <div>
            <img src={Img4} alt='' className='h-[100px]'/>
          </div>
          <div>
            <img src={Img5} alt='' className='h-[90px]'/>
          </div>
          <div>
            <img src={Img6} alt='' className='h-[80px]'/>
          </div>
        </Slider>  
      </div>
    </div>
  )
}

export default Home;