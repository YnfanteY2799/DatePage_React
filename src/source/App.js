import 'semantic-ui-css/semantic.min.css';
import React, { useState } from "react";
import './css/App.css';
import { Calendar } from "../source/components/calendar/Calendar";
import { CalendarForm } from "../source/components/calendar/CalendarForm";
import { Sidebar } from "../source/components/navbar/Navbar";

const doctorProps = [
{
  name:"Yulian Montoya",
  doctorId:"y9896458",
  maxDatesPerDay:7,
  scheduledDayPerYear:{
    year:2021,
    days:[
    {month: 8, day: 15 , dates:[
      { clientName:"Juancito", hoursFrom:"11:00AM", HoursTo: "01:00PM", id:"458596321456" ,confirmed:false },
      { clientName:"Juana", hoursFrom:"10:00AM", HoursTo: "11:00AM", id:"458596321459" , confirmed:false },
      { clientName:"Manuel", hoursFrom:"09:00AM", HoursTo: "01:00PM", id:"4585963214510" , confirmed:false },
      { clientName:"Jhon", hoursFrom:"11:00AM", HoursTo: "01:00PM", id:"4585963214511" , confirmed:false },
      { clientName:"Peter", hoursFrom:"11:00AM", HoursTo: "01:00PM", id:"458596321412" , confirmed:false },
      { clientName:"Pedro", hoursFrom:"11:00AM", HoursTo: "01:00PM", id:"458596321413" , confirmed:false },
      { clientName:"Michael", hoursFrom:"11:00AM", HoursTo: "01:00PM", id:"458596321466" , confirmed:false }
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
  ]},
  nonAvailableDays:[
    {yearDates:2021, month:8 , day: 10},
    {yearDates:2021, month:8 , day: 11},
    {yearDates:2021, month:8 , day: 12},
    {yearDates:2021, month:8 , day: 13},
    {yearDates:2021, month:6 , day: 10},
    {yearDates:2021, month:7 , day: 10},
    {yearDates:2021, month:8 , day: 17},
    {yearDates:2021, month:9 , day: 10},
    {yearDates:2021, month:10 , day: 10}
  ],
}
]

const menuOptsLider = [
  {catName: "Oncologia", docNames:[
    {name:"Yulian Montoya",id:"y9896458"},
    {name:"Juanita Montoya",id:"y98964ccccc58"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
  {catName: "Dermatologia", docNames:[
    {name:"Yulian Montoya",id:"aaaaaaaa"},
    {name:"Juanita Montoya",id:"y9896457"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
  {catName: "Odontologia", docNames:[
    {name:"Yulian Montoya",id:"aaaaaaa"},
    {name:"Juanita Montoya",id:"y98sss96458"},
    {name:"Yulian Montoya",id:"u6735674"}
  ]},
];

const dfp = {scheduledDay:[], nonAvailableDays:[]};

const App = () => {
  
  let [selectedDate, setSelectedDate] = useState({dayDates:[]});
  let [selectedDoctor, setSelectedDoctor] = useState(dfp);
  let getClicking = (id) => setSelectedDoctor( doctorProps.filter(({doctorId}) => doctorId === id)[0] ?? dfp);
  let gettinRegsToForm = (args) => setSelectedDate(args); 
  let deleteRegFromArr = (id, dcId, month, day, year) => {

    let [resArr] = doctorProps.filter(( {doctorId:dd } ) => dd === dcId );
    let { scheduledDay } = resArr;
    let [{dates}] = scheduledDay.filter(({day:d, yearDates:yd, month:m}) => d === day && yd === year && m === month );
    // console.log(dates.filter());
      doctorProps[0].scheduledDay.dates = dates.filter(({id:dd}) => dd !== id)
    console.log(resArr.scheduledDay.dates)
    console.log(dates)
    console.log(doctorProps)

    console.log(id)
    console.log(dcId)
    console.log(month)
    console.log(day)
    console.log(year)
  }  


  return( 
    <div className="card">
      
      <Sidebar menu={menuOptsLider} cliking={(e) => getClicking(e)}/>
      
      <div className="row">
      
        <div className="container low-whidt">
          <Calendar doctorProps={selectedDoctor}  settingDate={(d) => gettinRegsToForm(d)} />
        </div>

        <div className="container low-whidt">
          <CalendarForm selectedDates={selectedDate} deleteReg={(e,d, m, dd,y) => deleteRegFromArr(e,d, m, dd, y)} />      
        </div>
      
      </div>
    
    </div>
  );
}


export default App;
