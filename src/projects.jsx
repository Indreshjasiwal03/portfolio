import React from 'react'
import Card from './Card';
import studyNotion from"./images/StudyNotion.jpg"
import razorpay from"./images/razorpay-icon.jpg"
import face from "./images/Face.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: studyNotion,
          altText: 'StudyNotion Website',
          title: 'StudyNotion Website',
          description: "Study Notion is an educational website that provides online courses, study materials, and learning resources to help users upskill efficiently.",
          explore:""
        },
        {
          imageUrl:face,
          altText: 'Facial Recognition System',
          title: 'Facial Recognition System',
          description: "A Facial Recognition System identifies or verifies individuals by analyzing facial features using AI and deep learning, commonly used for security, authentication, and surveillance.",
          explore:""

        },
        {
          imageUrl: razorpay,
          altText: 'Razorpay',
          title: 'Razorpay Clone',
          description: "The Razorpay Clone is a payment gateway platform that enables secure online transactions, supporting multiple payment methods like UPI, cards, and net banking.",
          explore:""
        },
        // {
        //     imageUrl: wise_way,
        //     altText: 'wise_way',
        //     title: 'WiseWay',
        //     description: "a web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
        //     explore:"https://github.com/Praneeth2025/WiseWay-website"
        //   }
      ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
