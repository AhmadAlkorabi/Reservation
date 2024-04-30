import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MyContext } from './Adding';
const MyDropdown = () => {
    const { setStatus } = useContext(MyContext);
    const [selectedOption, setSelectedOption] = useState(''); // Initialize with an empty string
    const handleSelect = (eventKey) => {
        setSelectedOption(eventKey); // Update the selected option when an item is clicked
        setStatus(eventKey)
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                {selectedOption || 'نوع الحجز'}
            </Dropdown.Toggle>
            <Dropdown.Menu className='end-0 text-center'>
                <Dropdown.Item eventKey="مسبق">مسبق</Dropdown.Item>
                <Dropdown.Item eventKey="حالة اسعافية">حالة اسعافية</Dropdown.Item>
                <Dropdown.Item eventKey="مباشر">مباشر</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MyDropdown;
