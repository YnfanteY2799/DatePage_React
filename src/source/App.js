import React, { useState } from "react";
import './css/App.css';
import { Calendar } from "../source/components/calendar/Calendar";
import { NavBar } from "../source/components/navbar/Navbar";

const doctorProps = {
  name:"Yulian Montoya" ,
  yearDates:2021,
  maxDatesPerDay:7,
  scheduledDay:[
    {month: 8, day: 15 , dates:[
      { clientName:"Juancito", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Juana", hoursFrom:"10:00AM", HoursTo: "11:00AM", confirmed:false },
      { clientName:"Manuel", hoursFrom:"09:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Jhon", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Peter", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Pedro", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Michael", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false }
    ]},
    {month: 8, day: 13 , dates:[
      { clientName:"Juancito", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Juana", hoursFrom:"10:00AM", HoursTo: "11:00AM", confirmed:false },
      { clientName:"Manuel", hoursFrom:"09:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Jhon", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Peter", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Pedro", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Michael", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false }
    ]},
    {month: 8, day: 16 , dates:[
      { clientName:"Juancito", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Juana", hoursFrom:"10:00AM", HoursTo: "11:00AM", confirmed:false },
      { clientName:"Manuel", hoursFrom:"09:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Jhon", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Peter", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Pedro", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Michael", hoursFrom:"11:00AM", HoursTo: "01:00PM", confirmed:false }
    ]},
  ],
  nonAvailableDays:[
    {month:8 , day: 10},
    {month:8 , day: 11},
    {month:8 , day: 12},
    {month:8 , day: 13},
    {month:6 , day: 10},
    {month:7 , day: 10},
    {month:8 , day: 17},
    {month:9 , day: 10},
    {month:10 , day: 10}
  ],


}




const App = () => {
  
  let [dateSetter, setDateSetter] = useState("");
  
  // console.log(dateSetter)
  
  return <div className="App">
        
    <NavBar/>
    <main>
      <Calendar doctorProps={doctorProps}  settingDate={(d) => setDateSetter(d)} />
    </main>
          
  </div>
}


export default App;
