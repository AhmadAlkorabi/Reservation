import React, { useContext } from 'react'
import { MainContext } from '../App'
import { motion } from 'framer-motion'

const Here = () => {
  const { item, setItem } = useContext(MainContext)
  return (
    <div>
      {item.length != 0 ? (
        <motion.div className='bg-light me-auto ms-auto mt-3 d-block rounded-3 p-3 col-7 col-md-5 col-lg-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', velocity: 1, delay: 1 }}
        >
          <h2 className='bg-danger p-4 rounded-2'>المريض الحالي:</h2>
          <div>
            <h3>الاسم:</h3>
            <h5 className='text-center'>{item.name}</h5>
          </div>
          <div>
            <h3>الرقم:</h3>
            <h5 className='text-center'>{item.number}</h5>
          </div>
          <div>
            <h3>زمرة الدم:</h3>
            <h5 className='text-center'>{item.bloodType}</h5>
          </div>
          <div>
            <h3>الحجز:</h3>
            <h5 className='text-center'>{item.status}</h5>
          </div>
          <div>
            <h3>التاريخ:</h3>
            <h5 className='text-center'>{item.date}</h5>
          </div>
        </motion.div>
      ) : (
        <h1 className='bg-light m-auto w-50 p-5 text-center rounded-5 mt-5'>لا يوجد مرضى حاليين</h1>
      )}
    </div>

  )
}

export default Here