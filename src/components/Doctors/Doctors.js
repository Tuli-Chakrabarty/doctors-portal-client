import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import img from '../../images/doctor-sm.png'
import dg from '../../images/dg.png'


import Doctor from '../Doctor/Doctor';
import 'swiper/css';
const Doctors = () => {
    const doctors=[{
        name:"Tuli Chakroborty",
        number:"017356253",
        img:img


    },{
        name:"Mr. Fahim ",
        number:"01735625233",
        img:img


    },{
        name:"Mr. Fahim ",
        number:"01735625233",
        img:dg


    },{
        name:"Mr. Fahim ",
        number:"01735625233",
        img:img


    },
    {
        name:"Mr. Fahim ",
        number:"01735625233",
        img:dg


    },{
        name:"Mr. Fahim ",
        number:"01735625233",
        img:dg


    }]
    return (
        <section className="doctors">
            <div className="container">
                <h4 className="text-center  text-primary mb-5">Our Doctors</h4>
                <div className="row">
                <Swiper
      spaceBetween={30}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {doctors.map((doctor,index)=>{return ( <SwiperSlide className='index' ><Doctor doctor={doctor} /></SwiperSlide>)})}
     
   
    </Swiper>
                   
                </div>
            </div>
        </section>
    );
};


export default Doctors;
