import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
<p className='about_me_left' align="center">
  Hello! I'm Indresh Kumar, a passionate Data Analyst and Web Developer. 
  I enjoy working with data to uncover insights, build dashboards, and apply analytical techniques for decision-making. 
  On the development side, I specialize in creating responsive, user-friendly web applications using modern technologies. 
  Always eager to learn and grow, I’m excited to connect and collaborate on impactful projects!
</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
