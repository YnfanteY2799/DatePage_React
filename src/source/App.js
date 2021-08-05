import React from "react";
import './css/App.css';
import { Calendar } from "../source/components/calendar/Calendar";

const doctorProps = {
  yearDates:2021,
  maxDatesPerDay:10,
  scheduledDay:[
    {month: 8, day: 4 , dates:5},
    {month: 8, day: 30 , dates:1},
    {month: 8, day: 22 , dates:10},
    {month: 8, day: 15 , dates:10},
    {month: 8, day: 9 , dates:1},
    {month: 9, day: 9 , dates:1},
    {month: 12, day: 9 , dates:10},
    {month: 1, day: 1 , dates:10},
  ]
}


const App = () => (
  <div className="App">
    
    <main>
      <Calendar doctorProps={doctorProps}
      />
    </main>

  </div>
);


export default App;
