import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../images/wilson.png';
import sinthia from '../../images/p.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'If you suspect you grind your teeth, whether during sleep or when awake, consult your family dentist in Etobicoke for treatment. Knowing why you grind your teeth and how to stop it is important for your oral health and a good night’s sleep both for you and your partner.        ',
        author:'Dr. Coudi',
        authorImg : wilson,
        date : '12 September 2022'
    },
    {
        title : 'Neuroscience',
        description : 'Read about advancements and tips for managing a variety of neurological conditions, including epilepsy, stroke, multiple sclerosis, brain tumors, spine disease, Parkinson’s disease, and rare neurological conditions.       ',
        author:'Dr. Sinthia',
        authorImg : sinthia ,
        date : '23 December 2022'
    },
    {
        title : 'Heart and Vascular Update',
        description : 'The Penn Heart and Vascular blog provides the latest information on heart disease prevention, nutrition and breakthroughs in cardiovascular care.    ',
        author:'Dr. Willamson',
        authorImg : wilson,
        date : '17 January 2023'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5 d-flex justify-content-center gap-4">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;