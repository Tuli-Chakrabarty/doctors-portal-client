import React from 'react';
import Modal from 'react-modal';

import { useForm } from "react-hook-form";
import './AppoinmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppoinmentForm = ({modalIsOpen, closeModal, appoinmentOn,date, required}) => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log("datat",data);
 data.service = appoinmentOn;
 data.date = date;
 data.created = new Date();

    fetch('http://localhost:5000/addAppointment',{
        method:'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
        if(success){
            closeModal ();
            alert('Appointment created successfully');
        }
    })
 
}
    return (
        <div>
            
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}    
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand" >{appoinmentOn}</h2>
               <p className="text-secondary text-center"><small >ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }} className= "form-group">
                        <input type="text" {...register("YourName")}  placeholder="Your Name" className="form-control"/>
                    {/* {errors.name && <span className="text-danger">This field is required</span>}  */}
                    </div>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }} className= "form-group">
                        <input type="text" {...register("phone_number")}  placeholder=" Phone Number" className="form-control"/>
                    {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }} className= "form-group">
                        <input type="text" {...register("Email")}  placeholder="Email Address" className="form-control"/>
                    {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div style={{ marginTop: '20p   x', marginBottom: '20px' }} className="form-group row">
                        <div style={{ marginTop: '20px', marginBottom: '20px' }} className="col-4">
                            <select className="form-control" name="gender" {...register("gender")}>
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                            </select>
                            {/* {errors.gender && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div style={{ marginTop: '20px', marginBottom: '20px' }} className="col-4">
                        <input type="text" {...register("Age",)} placeholder="Age" className="form-control"/>
                    {/* {errors.Age && <span className="text-danger">This field is required</span>} */}
                           
                        </div>
                        <div style={{ marginTop: '20px', marginBottom: '20px' }} className="col-4">
                        <input type="text" {...register("Weight")}  placeholder="Weight" className="form-control"/>
                    {/* {errors.weight && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }} className="form-group text-right">
                        <button type="submit" className="btn btn-brand"> Send </button>
                    </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
};


export default AppoinmentForm;