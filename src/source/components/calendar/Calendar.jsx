import React, { useState } from 'react';
import { 
    format, 
    addMonths, 
    subMonths, 
    startOfWeek, 
    addDays, 
    startOfMonth, 
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay
} from "date-fns";


const Header = ({changeMonth = t => alert(t), actualMonth, actualDate }) => (
    <div className="header row flex-middle">
        {/* Left */}
        <div className="col col-start">
             <div className="icon" onClick={() => changeMonth(true)}> arrow_left </div>
        </div>
        
        {/* Center */}
        <div className="col col-center">
            <span onClick={actualDate}>
                { format(actualMonth, "MMMM yyyy") }
            </span>
        </div>

        {/* Right */}
        <div className="col col-end">
            <div className="icon" onClick={() => changeMonth(false)}> arrow_right </div>
        </div>

    </div>
);

const Days = ({ actualMonth }) =>{
    let days = [];
    for(let i = 0; i < 7; i++){
        days.push(
            <div className="col col-center" key={i} >
                { format( addDays( startOfWeek(actualMonth), i ), "EEEE" ) }
            </div>
        );
    }
    return <div className= "days row">{days}</div>
}

const Cells = ({currentMonth, onDateClick = d => alert(d), scheduledDays = {scheduledDay:[]}}) =>{

    let currMonthDates = scheduledDays.scheduledDay.filter(({month}) => month === currentMonth.getMonth() + 1),
        monthStart = startOfMonth(currentMonth),
        monthEnd = endOfMonth( monthStart ),
        startDate = startOfWeek( startOfMonth(monthStart) ),
        endDate = endOfWeek(monthEnd),
        days = [], rows = [], day = startDate,
        formattedDate = "",
        exec = ({target:{id}}) => onDateClick( new Date(id) ),
        {maxDatesPerDay, yearDates} = scheduledDays,
        filteringFunctions = ({day:d}) => (
            day.getDate() === d && 
            day.getFullYear() === yearDates && 
            isSameMonth(day, monthStart));

        while(day <= endDate){
            for(let i = 0; i < 7; i++){
                formattedDate = format(day, "d");
                let [ cof ] = currMonthDates.filter(filteringFunctions);
                days.push(
                    <div className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, monthStart) }`} 
                    key={i} onClick={exec} id={day}
                    style={
                        (cof !== undefined) ? 
                        ((cof.dates === maxDatesPerDay) ? {backgroundColor:'#A52A2A'} : {}) : 
                        {}
                    }>
                        <span className="number" id={day}>{formattedDate}</span>
                        <span className="bg" id={day}>{formattedDate}</span>
                    </div>
                );
                day = addDays(day,1);
            }

            rows.push( <div className="row" key={day}> {days} </div> );
            days = [];
        }

    return <div className="body" > {rows} </div>;
}

const Calendar = ({ doctorProps }) => {

    // Variables
    let [currentMonth, setCurrentMonth] = useState(new Date());

    // Functions
    let onDateClick = arg => {
        let date = `${arg.getDate()}/${arg.getMonth() + 1}/${arg.getFullYear()}`;
        
        alert(date);

        return date;
    };

    let changeMonth = w => w ? setCurrentMonth( subMonths(currentMonth, 1) ) : 
    setCurrentMonth( addMonths(currentMonth, 1) );

    let setCurrentDate = () => setCurrentMonth(new Date());


    return(
        <div className="calendar">
            <div> 
                <Header changeMonth={changeMonth} actualMonth = {currentMonth} actualDate={setCurrentDate}/> 
            </div>
            
            <div> 
                <Days actualMonth={currentMonth} /> 
            </div>
            
            <div> 
                <Cells currentMonth={currentMonth} onDateClick={(e) => onDateClick(e)} 
                scheduledDays = {doctorProps} /> 
            </div>
        </div>
    );
}


export { Calendar };