import React from "react";

const CalendarForm = ( { selectedDates = { dayDates:{ dates:[] } }, deleteReg } ) => {
    
    let { dayDates:{dates, month, day, yearDates }, docId } = selectedDates;

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Desde</th>
                    <th scope="col">Hasta</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Confirmado</th>
                    <th scope="col">Editar</th>
                </tr>
            </thead>
            <tbody>
                {( dates ?? [] ).map(({clientName, hoursFrom, HoursTo, confirmed, id },i) => 
                    <tr key={i}>
                        <td>{hoursFrom}</td>
                        <td>{HoursTo}</td>
                        <td>{clientName}</td>
                        <td>{confirmed ? "Confirmado!" : "Falta Confirmacion"}</td>
                        <td> 
                            <button className="btn outline fas fa-pen-square"/> / 
                            <button className="btn outline fas fa-minus-square" onClick={() => deleteReg(id, docId, month, day, yearDates) } /> 
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}




export { CalendarForm };