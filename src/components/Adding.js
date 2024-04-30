import React, { useEffect } from 'react'
import { useState, useRef, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyDropdown from './MyDropdown ';
import BloodDrobdown from './BloodDrobdown';
import { toast } from 'react-toastify';

export const MyContext = createContext();
const Adding = () => {
    const notify = () => toast.warn("لم يتم الحفظ");
    const [status, setStatus] = useState('');
    const [blood, setBlood] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const name = useRef('');
    const phone = useRef('');
    const date = useRef('')
    const handleSubmit = async () => {
        const data = {
            id: Symbol(),
            name: name.current.value,
            number: phone.current.value,
            bloodType: blood,
            status,
            date: date.current.value
        }

        try {
            await fetch('http://localhost:3006/people', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            
        } catch (error) {
            return error;
        }
    };

    return (
        <MyContext.Provider value={{ status, setStatus, blood, setBlood }}>
            <Button variant="danger" onClick={handleShow}>
                اضافة حجز +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>اضافة حجز</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>الاسم</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                required
                                ref={name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>الرقم</Form.Label>
                            <Form.Control
                                type="text"
                                pattern="[09][0-9]{9}"
                                required
                                ref={phone}
                                name='number'

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <BloodDrobdown />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <MyDropdown />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>التاريخ</Form.Label>
                            <Form.Control
                                type="date"
                                required
                                ref={date}
                                name='date'
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-between'>
                            <Button type='submit' variant="danger" >ارسال</Button>
                            <Button variant="secondary" onClick={() => {
                                handleClose();
                                notify();
                            }}>
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </MyContext.Provider>
    )
}

export default Adding



