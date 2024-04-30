import { motion } from 'framer-motion';
import React from 'react'
import { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';

function Come() {
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3006/people');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:3006/people/${id}`, {
        method: 'DELETE',
      });
      getData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [])
  const filterData = data.filter((e) => {
    return e.status === 'مسبق'
  })
  return (
    <div>
      {filterData.length > 0 ? filterData.map((e) => {
        return (
          <motion.div className={`rounded-5 p-3 m-1 d-flex justify-content-between align-item-center col-12 col-md-8 col-lg-6 ms-auto me-auto bg-success`} key={e.id}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', velocity: 30 }}
          
          >
            <h3 className='m-0 w-25'>{e.name}</h3>
            <div>
              <p className='m-0'>{e.date}</p>
              <p className='m-0'>{e.status}</p>
            </div>
            <motion.div className='d-flex align-items-center' whileHover={{scale:1.5}}>
              <ImCross size={'1.5em'} className='text-white m-1' onClick={() => {
                deleteItem(e.id)
                toast.error('تم الحذف بنجاح')
              }} />
            </motion.div>
          </motion.div>
        )
      }) : (<h1 className='bg-light m-auto w-50 p-5 text-center rounded-5 mt-5'>لا يوجد مرضى </h1>)}
    </div>
  )
}

export default Come