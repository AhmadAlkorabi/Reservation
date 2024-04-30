import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { FaCheck } from "react-icons/fa";
import { MainContext } from '../App';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
const Wait = () => {
  const { item, setItem } = useContext(MainContext)
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
    return e.status === 'مباشر' || e.status === 'حالة اسعافية';
  })
  const sortedData = filterData.sort((a, b) => {
    return a.status === "حالة اسعافية" ? -1 : 1;
  })




  return (
    <div>
      {sortedData.length > 0 ? sortedData.map((e) => {
        return (
          <motion.div className={`${e.status === "حالة اسعافية" ? "bg-danger" : "bg-primary"} rounded-5 p-3 m-1 d-flex justify-content-between align-item-center col-12 col-md-8 col-lg-6 ms-auto me-auto`} key={e.id}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', velocity: 30 }}
          >
            <h3 className='m-0 w-25'>{e.name}</h3>
            <div>
              <p className='m-0'>{e.date}</p>
              <p className='m-0'>{e.status}</p>
            </div>
            <motion.div whileHover={{scale:1.5}} whileTap={{color:"red"}}>
              <FaCheck size={'2em'} className='text-white mt-2' onClick={() => {
                setItem(e)
                deleteItem(e.id)
                toast.success("تم النقل")
              }} />
            
            </motion.div>
          </motion.div>
        )
      }) : (<h1 className='bg-light m-auto w-50 p-5 text-center rounded-5 mt-5'>لا يوجد مرضى </h1>) }
    </div>
  )
}

export default Wait