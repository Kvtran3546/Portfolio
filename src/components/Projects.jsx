import React from 'react'
import styles from '../style';
import {projects} from '../constants';
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <div className='w-[95%] flex flex-col justify-center items-center'>
      <div className='border-b-[2px] border-gray-300 w-[80%] mb-20 mt-10'></div>
      <h1 className={`${styles.heading1}`}>Projects</h1>
      <div className='w-[80%] flex flex-col justify-center items-center'>
        <h2 className={`${styles.heading2} text-gray-500 mt-5`}>Landing Pages</h2>
        <div className='overflow-hidden flex flex-wrap justify-center items-center mt-5'>
          {projects.map((project) =>(
            <ProjectCard logo={project.logo} name={project.name} url={project.url} description={project.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;