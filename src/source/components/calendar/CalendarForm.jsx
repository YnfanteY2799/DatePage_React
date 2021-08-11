import React from "react";
import { Form } from "semantic-ui-react";

const CalendarForm = ({selectedDates}) => {

    let { dayDates:{dates} } = selectedDates;
    return(
        <Form>
            {( dates ?? [] ).map(({clientName, hoursFrom, HoursTo}) => 
            <Form.Group widths='equal'>
                <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    label='Name'
                    placeholder='Name'
                    value={clientName}
                />
                <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-last-name'
                    label='Desde'
                    placeholder='Desde'
                    value={hoursFrom}
                />
                <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-last-name'
                    label='Hasta'
                    placeholder='Hasta'
                    value={HoursTo}
                />
            </Form.Group>
        )}
      </Form>
    );
}




export { CalendarForm };