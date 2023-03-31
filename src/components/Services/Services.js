import React from 'react';

import dermatology from '../../images/dermatology.png';
import heart from '../../images/heart.png';

import whitening from '../../images/Dental.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        quote: 'Many diseases of the skin, hair and nails are now treated with more advanced methods, thanks to the continuing development of this specialty. More and more people can now enjoy healthy, smooth skin with the help of medications and treatments offered by dermatology centers.',
        name:'Dermatology',
        img: dermatology
    },
    {
        quote: 'Cardiology is one of the most lucrative areas of medicine nowadays, considering the current rise in the incidence of heart-related diseases. Many studies concerning the heart and its diseases have been made and had resulted to more improvements in the approach to dealing with most of the cardiac problems.',
        name:'Cardiology',
        img: heart
    },
    
    {
        quote: 'The risk of tooth decay, gum disease and tooth loss can be reduced with good oral hygiene, a low-sugar and acid diet, wearing a mouthguard when playing sport, and regular visits to the dentist.',
        name:'Dental Services',
        img: whitening
    },
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetail  service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;