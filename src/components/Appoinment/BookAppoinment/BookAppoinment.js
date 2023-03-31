import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: '',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 1,
        subject: 'Dermatologist',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 1,
        subject: 'Cardiologist',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 1,
        subject: 'Cavity Protection',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am - 9:00 AM',
        totalSpace: 10
    },

]

const BookAppoinment = ({date}) => {
    return (
       <section>
        <h2 className="text-center text-brand mb-5">Available Appoinments on {date.toDateString()}</h2>
        <div className="row">
            {
                bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
            }

        </div>
       </section>
    );
};

export default BookAppoinment;