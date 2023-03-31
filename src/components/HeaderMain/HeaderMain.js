import React from 'react';
import Chair from '../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
       <div className="col-md-4 offset-md-1">
        <h1 style={{color: '#3A4256'}}>Your New Life  starts here</h1>
        <p className="text-secondary">PRISMA DIAGNOSTIC CENTER is Sylhet’s one of the leading Diagnostic Center. PRISMA DIAGNOSTIC CENTER helps facilitate the provision of timely, affordable, and state-of-art diagnostic care in a safe and secure environment. At PRISMA DIAGNOSTIC CENTER, we understand that high-quality and reliable diagnostic findings are critical for superior clinical outcomes.</p>
        <button className="btn btn-primary">GET APPOINMENT</button>
       </div>
       
       <div className="col-md-6">

<img src={Chair} alt="" className="img-fluid" />
       </div>

        </main>
    );
};

export default HeaderMain;