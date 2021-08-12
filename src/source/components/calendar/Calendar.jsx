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
    isSameMonth
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
    return <div className= "days row">{days}</div>;
}

const Cells = ( { currentMonth, onDateClick = d => alert(d), scheduledDays = {scheduledDay:[]} } ) =>{

    let {maxDatesPerDay, nonAvailableDays, scheduledDay } = scheduledDays;
    let currMonthDates = scheduledDay.filter(({month}) => month === currentMonth.getMonth() + 1);
    let monthStart = startOfMonth(currentMonth);
    let monthEnd = endOfMonth( monthStart );
    let startDate = startOfWeek( startOfMonth(monthStart) );
    let endDate = endOfWeek(monthEnd);
    let days = [], rows = [], day = startDate, formattedDate = "";
    let exec = ({target:{id}}) => onDateClick( new Date(id) );
    let filteringFunctions = ({day:d, yearDates:y}) => ( day.getDate() === d && day.getFullYear() === y && isSameMonth(day, monthStart));
    let nonAvDays = nonAvailableDays.filter(({month, yearDates:y}) => month === currentMonth.getMonth() + 1 && y === day.getFullYear()).map(({day})=> day);
    let setDisabledDays = (d) => !isSameMonth(d, monthStart) || nonAvDays.includes(d.getDate());
            
    while(day <= endDate){
        for(let i = 0; i < 7; i++){
            formattedDate = format(day, "d");
            let [ cof ] = currMonthDates.filter( filteringFunctions );
            
            days.push(
                <div className={`col cell ${ setDisabledDays(day) && "disabled"}`} key={i} onClick={exec} id={day}
                style={(cof !== undefined) ? 
                ( (cof.dates.length === maxDatesPerDay) ? {backgroundColor:'#A52A2A'} : {} ) : {} }>
                    <span className="number" id={day}>{formattedDate}</span>
                    <span className="bg" id={day}>{formattedDate}</span>
                </div>
            );
            day = addDays(day,1);
        }

        rows.push( <div className="row" key={day}> {days} </div> ); days = [];
    }

    return <div className="body" > {rows} </div>;
}

const Calendar = ({ doctorProps, settingDate  }) => {

    // Variables
    let [currentMonth, setCurrentMonth] = useState(new Date());

    //In Component Functions
    let changeMonth = w => w ? setCurrentMonth( subMonths(currentMonth, 1) ) : 
    setCurrentMonth( addMonths(currentMonth, 1) );
    let setCurrentDate = () => setCurrentMonth(new Date());

    // Out-Component Functions
    let onDateClick = arg =>{ 
        let {name, scheduledDay:sd, doctorId } = doctorProps;
        let date = `${arg.getDate()}/${arg.getMonth() + 1}/${arg.getFullYear()}`;
        let filteringDate = sd.filter(({month:m, day:d, yearDates:y}) => d === arg.getDate() && m === arg.getMonth() + 1 && y === arg.getFullYear() );        
       
        settingDate({
            name:name,
            dayDates: filteringDate.length > 0 ? filteringDate[0] : [],
            crrDate:date,
            docId:doctorId,
        });
    }

    return(
        <div className="calendar">
            <Header changeMonth={changeMonth} actualMonth = {currentMonth} actualDate={setCurrentDate}/> 
            <Days actualMonth={currentMonth} /> 
            <Cells currentMonth={currentMonth} 
            onDateClick={(e) => onDateClick(e)} scheduledDays = {doctorProps} />
        </div>
    );
}


export { Calendar };