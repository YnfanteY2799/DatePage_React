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
        {maxDatesPerDay, yearDates, nonAvailableDays } = scheduledDays,
        filteringFunctions = ({day:d}) => (
            day.getDate() === d && 
            day.getFullYear() === yearDates && 
            isSameMonth(day, monthStart)),
            nonAvDays = nonAvailableDays.filter(({month}) => month === currentMonth.getMonth() + 1).map(({day})=> day),
            setDisabledDays = (d) => !isSameMonth(d, monthStart) || nonAvDays.includes(d.getDate());
            
            
        while(day <= endDate){
            for(let i = 0; i < 7; i++){
                formattedDate = format(day, "d");
                let [ cof ] = currMonthDates.filter( filteringFunctions );
            
                days.push(
                    <div className={`col cell ${ setDisabledDays(day) && "disabled"}`} key={i} onClick={exec} id={day}
                    style={
                        (cof !== undefined) ? 
                        ((cof.dates.length === maxDatesPerDay) ? {backgroundColor:'#A52A2A'} : {}) : 
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

const DeatilsModal = ({ doctorDayProp, isOpen, onClickOut, onChangeInput }) => {

    let { name, dayDates, crrDate } = doctorDayProp;
    let { dates } = dayDates ?? {};
    let dg = ( dates ?? [] ).map(({clientName, hoursFrom, HoursTo, confirmed},i) => <tr key={i}>
        <td>
            <input type="text" value={clientName} onChange={onChangeInput} readOnly/>
        </td>
        <td>
            <input value = {hoursFrom} onChange={onChangeInput} style={{width:"21%"}}/> - <input value = {HoursTo} onChange={onChangeInput} style={{width:"21%"}}/>
        </td>
        <td>
            {confirmed ? "Confirmado" : "No Confirmado"}
        </td>
        <td>
            <i>a</i>
        </td>
    </tr>
    );

    return <div className={`cst-modal${isOpen ? "-show fadein" : ""}`} onClick={onClickOut} id="baseContainer" >
                <div className="cst-modal-content-form" id="modal-form">
                    <div className="modal-title" id="docName">{name?? ""} - {crrDate}</div>
                        <div className="modal-body" id="docDates">
                            <table className="table" id="docDatesTable">
                                <thead>
                                    <tr>
                                        <th>Nombre Cliente</th>
                                        <th>Hora</th>
                                        <th>Confirmacion?</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>{dg}</tbody>
                            </table>
                        </div>
                    </div>
                </div>;
}

const Calendar = ({ doctorProps, settingDate  }) => {

    // Variables
    let [currentMonth, setCurrentMonth] = useState(new Date());
    let [openModal, setOpenModal] = useState(false);
    let [currentDayDoctor, setCurrentDayDoctor] = useState({});

    //In Component Functions
    let changeMonth = w => w ? setCurrentMonth( subMonths(currentMonth, 1) ) : 
    setCurrentMonth( addMonths(currentMonth, 1) );
    let setCurrentDate = () => setCurrentMonth(new Date());
    let openCloseModal = (id) => id === "baseContainer" && setOpenModal(!openModal);

    // Out-Component Functions
    let onDateClick = arg =>{ 
        let {name, scheduledDay:sd } = doctorProps;
        let date = `${arg.getDate()}/${arg.getMonth() + 1}/${arg.getFullYear()}`;
        let filteringDate = sd.filter(({month:m, day:d}) => d === arg.getDate() && m === arg.getMonth() + 1 );

        setCurrentDayDoctor({
            name:name,
            dayDates: filteringDate.length > 0 ? filteringDate[0] : [],
            crrDate:date,
        });

        setOpenModal(!openModal);
        settingDate(date);
    }

    let inputEvowel = (t) => {
        console.log(t);
    }

    return(
        <div className="calendar">
            <Header changeMonth={changeMonth} actualMonth = {currentMonth} actualDate={setCurrentDate}/> 
            <Days actualMonth={currentMonth} /> 
            <Cells currentMonth={currentMonth} 
            onDateClick={(e) => onDateClick(e)} scheduledDays = {doctorProps} /> 
            <DeatilsModal doctorDayProp = {currentDayDoctor} isOpen={openModal} 
            onClickOut={({target:{id}}) => openCloseModal(id)} 
            onChangeInput={({target}) => inputEvowel(target)}/>

        </div>
    );
}


export { Calendar };