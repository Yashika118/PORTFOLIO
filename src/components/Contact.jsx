import React from 'react'
import { CONTACT } from '../assets/constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>

        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}  
            className='my-10 text-center text-4xl font-bold'>Get in Touch

        </motion.h1>

        <div className='text-center tracking-normal'>

            <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}} 
                className='my-4 '>{CONTACT.phoneNo}
            </motion.p>

            <a href="mailto:kumariyashika78@gmail.com" className=' text-blue-500'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact