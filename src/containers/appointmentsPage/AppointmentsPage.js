import React, { useState } from "react";
import { AppointmentForm } from "/src/components/appointmentForm/AppointmentForm.js";
import { TileList } from '../components/tileList/TileList';

export const AppointmentsPage = ({
  addAppointment,appointments,contacts
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(contact.length > 0 ? contacts[0].name : "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title, contact, date, time);
   setTitle("");
   setContact("");
   setDate("");
   setTime("");
   
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contact={contact}
        title={title}
        setTitle={setTitle}
        contacts={contacts}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};
