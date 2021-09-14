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

const defaultScheduleDays = {
    NonAvailableDaysActualYear:[],
    Dates:[],
    maxDatesPerDay:100,
}

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

const Cells = ( { currentMonth, onDateClick = d => alert(d), scheduledDays = defaultScheduleDays } ) =>{

    // console.table("ScheduledDays", scheduledDays);

    let { maxDatesPerDay, NonAvailableDaysActualYear, Dates, yearOfDates } = scheduledDays;

        console.log(NonAvailableDaysActualYear);
        console.log(maxDatesPerDay);
        console.log("scheduledDays : ", scheduledDays);

    let currMonthDates = (Dates??[]).filter(({Month}) => Month === currentMonth.getMonth() + 1);
    
    let monthStart = startOfMonth(currentMonth);
    
    let monthEnd = endOfMonth( monthStart );
    
    let startDate = startOfWeek( startOfMonth(monthStart) );
    
    let endDate = endOfWeek(monthEnd);
    
    let days = [], rows = [], day = startDate, formattedDate = "";
    
    let exec = ({target:{id}}) => onDateClick( new Date(id) );
    
    let filteringFunctions = ({Day:d}) => ( day.getDate() === d && day.getFullYear() === yearOfDates && isSameMonth(day, monthStart));
    
    let nonAvDays = (NonAvailableDaysActualYear??[]).filter(({Month}) => Month === currentMonth.getMonth() + 1 && yearOfDates === day.getFullYear()).map(({day})=> day);
    
    let setDisabledDays = (d) => !isSameMonth(d, monthStart) || nonAvDays.includes(d.getDate());
    
    let getDays = (cof) => {
        if(cof.DatesAtDay === maxDatesPerDay) return { backgroundColor:'#A52A2A' }; // Red <> Full Day
        else if(cof.DatesAtDay > 0 ) return { backgroundColor:'#62A0D7' }; // Blur <> Not Full Day
        else return {}; // Nothing <> Clear Day
    };        


    while(day <= endDate){
        for(let i = 0; i < 7; i++){
            formattedDate = format(day, "d");
            let [ cof ] = currMonthDates.filter( filteringFunctions );
            
            days.push(
                <div className={`col cell ${ setDisabledDays(day) && "disabled"}`} key={i} onClick={exec} id={day}
                style={(cof !== undefined) ? getDays(cof) : {} }>
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

        console.log("Date click ma dude")
        console.log(arg)

        // let {name, scheduledDay:sd, doctorId } = doctorProps;
        // let date = `${arg.getDate()}/${arg.getMonth() + 1}/${arg.getFullYear()}`;
        // let filteringDate = sd.filter(({month:m, day:d, yearDates:y}) => d === arg.getDate() && m === arg.getMonth() + 1 && y === arg.getFullYear() );        
       
        // settingDate({
        //     name:name,
        //     dayDates: filteringDate.length > 0 ? filteringDate[0] : [],
        //     crrDate:date,
        //     docId:doctorId,
        // });
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