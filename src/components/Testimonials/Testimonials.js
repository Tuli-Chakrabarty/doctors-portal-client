import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';

const testimonialData = [
    {
        quote : 'Prisma Diagnostic centre is the best one for diagnosis .Thete is reasonability & reality in the diagnosis Wishing all the best in future.. ',
        name : 'Wilson Harry',
        from : 'Sylhet',
        img : wilson
    },
    {
        quote : ' Good and well managed doctor chambers. I have to come here many times to consult doctors and tests. Most of the stuffs are helpful and professional. ',
        name : 'Ema Chowdhury',
        from : 'Sylhet',
        img : ema
    },
    {
        quote :' Average facilities. Rooms are not up to quality for patients. A lot of sound pollutions. Light pollution. Narrow spaces. But I think for budget consumers it’s a good alternative than other big names, Lab Aid or Square.',
        name : 'Aliza Farari',
        from : 'Sylhet',
        img : aliza
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5  d-flex gap-4 justify-content-center">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;