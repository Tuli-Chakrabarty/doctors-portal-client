import React from 'react';

const ServiceDetail = ({service,quote}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card-body">
        <p  className="text-secondary  text-center my-5">{quote}</p>
            </div>
            <div>
            <img style={{height: '170px',width:"160px"}} src={service.img} alt=""/>
    
           <div> <h5 className="mt-3 mb-3">{service.name}</h5>
           
            <h6 className="mt-3 mb-3">{service.quote}</h6>
           
           </div>
        </div>
        </div>
    );
};

export default ServiceDetail;