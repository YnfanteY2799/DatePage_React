import 'semantic-ui-css/semantic.min.css';
import React, { useState } from "react";
import './css/App.css';
import { Calendar } from "../source/components/calendar/Calendar";
import { CalendarForm } from "../source/components/calendar/CalendarForm";
import { Sidebar } from "../source/components/navbar/Navbar";
import { Container } from 'semantic-ui-react';

const doctorProps = [{
  name:"Yulian Montoya",
  doctorId:"y9896458",
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
      { clientName:"Juancito", hoursFrom:"500AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Juana", hoursFrom:"1000AM", HoursTo: "11:00AM", confirmed:false },
      { clientName:"Manuel", hoursFrom:"900AM", HoursTo: "01:00PM", confirmed:false },
      { clientName:"Jhon", hoursFrom:"1200AM", HoursTo: "01:00PM", confirmed:false },
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


}]

const menuOptsLider = [
  {catName: "Oncologia", docNames:[
    {name:"Yulian Montoya",id:"y9896458"},
    {name:"Juanita Montoya",id:"y98964ccccc58"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
  {catName: "Dermatologia", docNames:[
    {name:"Yulian Montoya",id:"aaaaaaaa"},
    {name:"Juanita Montoya",id:"y9896458"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
  {catName: "Odontologia", docNames:[
    {name:"Yulian Montoya",id:"aaaaaaa"},
    {name:"Juanita Montoya",id:"y98sss96458"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
];

const defaultProp = {scheduledDay:[], nonAvailableDays:[]};

const App = () => {
  
  let [selectedDate, setSelectedDate] = useState({dayDates:[]});
  let [selectedDoctor, setSelectedDoctor] = useState(defaultProp);
  let getClicking = (id) => setSelectedDoctor( doctorProps.filter(({doctorId}) => doctorId === id)[0] ?? defaultProp);
  let gettinRegsToForm = (args) => setSelectedDate(args); 
    
  return( 
  <div className="App">        
    <Sidebar menu={menuOptsLider} cliking={(id) => getClicking(id)}/>
      <Container> 
        <Calendar doctorProps={selectedDoctor}  settingDate={(d) => gettinRegsToForm(d)}/>
      </Container>
    <Container>
      <CalendarForm selectedDates={selectedDate}  />
    </Container>
  </div>
  
  );
}


export default App;
