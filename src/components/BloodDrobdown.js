import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MyContext } from './Adding';

const BloodDrobdown = () => {
    const { setBlood } = useContext(MyContext);
    const [selectedOption, setSelectedOption] = useState(''); // Initialize with an empty string
    const validBloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const handleSelect = (eventKey) => {
        setSelectedOption(eventKey); // Update the selected option when an item is clicked
        setBlood(eventKey)
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                {selectedOption || 'زمرة الدم'}
            </Dropdown.Toggle>
            <Dropdown.Menu className='end-0 text-center'>
                {validBloodTypes.map((e, index) => {
                    return (
                        <Dropdown.Item key={index} eventKey={`${e}`}>{e}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BloodDrobdown