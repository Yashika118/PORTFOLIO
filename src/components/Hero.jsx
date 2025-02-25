import React from 'react'
import { HERO_CONTENT } from '../assets/constants/index.js'
import profile from "../assets/profile-pic.jpg"
import { motion } from "framer-motion"
import { RESUME } from '../assets/constants/index.js'

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>

                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl'>Yashika
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-bold tracking-normal text-transparent '>Fullstack Developer
                            
                        </motion.span>

                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6  font-light tracking-normal '>{HERO_CONTENT}
                        </motion.p>

                        <motion.a
                            variants={container(1)}
                            initial="hidden"
                            animate="visible" 
                            href={RESUME} 
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-black font-bold text-lg tracking-wider px-5 py-2 rounded-md'
                            >
                                Resume
                        </motion.a>

                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}}
                            src={profile} alt="profilePic" className='h-[450px] rounded-3xl border-8'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero