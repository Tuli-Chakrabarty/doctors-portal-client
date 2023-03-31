import React, { useState, setSelectedDate } from 'react';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = { backgroundColor: "#F4FDFB", height: "100%"}

const Dashboard = () => {
    const [selectedDate, setSelected] = useState(new Date());
    const handleDateChange = date=> {
        setSelectedDate(date);
    }

    return (
       <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
            <Calendar onChange={handleDateChange}
             value={new Date()} />
            </div>
            <div className="col-md-5">
                <AppoinmentsByDate></AppoinmentsByDate>
            </div>
        </div>
       </section>
    );
};

export default Dashboard;