import React from 'react'
import Card from './Card';
import studyNotion from "./images/StudyNotion.jpg"
import prescripto from "./images/about_image.jpg"
import quickgpt from "./images/istockphoto-1495003645-1024x1024.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [

           {
      imageUrl: quickgpt,
      altText: 'QuickGPT',
      title: 'QuickGPT',
      description:
        "QuickGPT is an AI-powered chat and image generation platform built using OpenAI APIs. It enables users to chat, create images, and share AI-driven responses seamlessly.",
      explore: "https://quick-gpt-lime-three.vercel.app/"
    },
        {
          imageUrl: studyNotion,
          altText: 'StudyNotion Website',
          title: 'StudyNotion Website',
          description: "Study Notion is an educational website that provides online courses, study materials, and learning resources to help users upskill efficiently.",
          explore:"https://studynotion-website-5fem.onrender.com/"
        },
        {
       imageUrl: prescripto,
      altText: 'Prescripto',
      title: 'Prescripto',
      description:
        "Prescripto is an  healthcare platform that simplifies doctor appointment booking and prescription management. It helps patients connect with doctors and manage medical records seamlessly.",
      explore: "https://prescripto-main-sbtc.onrender.com/"
    },
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
