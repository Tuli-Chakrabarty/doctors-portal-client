import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';






const Doctor = ({doctor}) => {
  return (
    <div className="col-md-4 text-center">
           <div>
           <img style={{height: '70px',width:"40px"}} className="img-fluid mb-2" src={doctor.img} alt=""/>
           <h4>{doctor.name}</h4>
           
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.number}</p>
            </div>
         
         
        </div>
  );
};


export default Doctor;

