import React from 'react';
import styles from '../style';
const ProjectCard = ({logo, name, url, description}) => {
  return (
    <div className='project_card relative h-[52vh] flex flex-col flex-1 border-[4px] border-black rounded-lg px-5 py-10 mx-2 justify-center items-center bg-gradient-to-bl from-[#8b8b8b] to-[#ffffff]'>
        <div className='flex justify-center items-center bg-none'>
            <img src={logo} alt="logo" className='w-[200px] h-[200px] object-contain '/>
        </div>
        <div className='flex flex-col justify-start items-center'>
            <h2 className={`${styles.heading2} mt-2`}>{name}</h2>
            <div className='flex border-b-[3px] border-[#020000] w-[50%] my-5 rounded-full'/>
            <p className={`${styles.paragraph} w-[90%] font-medium`}>{description}</p>
            <a href={url} className={`${styles.paragraph} absolute bottom-5 font-medium`}>Check it out!</a>
        </div>
    </div>
  )
}

export default ProjectCard