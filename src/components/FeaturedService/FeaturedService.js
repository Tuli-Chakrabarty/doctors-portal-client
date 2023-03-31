import React from 'react';
import featured from '../../images/covid.png'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{height:'400px'}} className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Medical Care, on your Term(Covid-19)</h1>
                        <p className="text-secondary my-5">
                        The NHS offers treatments to people with coronavirus (COVID-19) who are at the highest risk of becoming seriously ill.You're eligible for these COVID-19 treatments if you have not been admitted to hospital and all of the following apply:<br/>
                       1. You're aged 12 or over. <br/>
2. You have symptoms of COVID-19, which are not getting better.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;