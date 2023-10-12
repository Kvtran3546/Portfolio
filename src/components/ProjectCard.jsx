import React from 'react';
import styles from '../style';

const ProjectCard = ({ logo, name, url, description }) => {
  return (
    <div className='relative w-auto h-[auto] flex flex-col flex-1 border-[2px] border-gray-300 rounded-lg px-5 py-10 mx-2 justify-center items-center transition-all duration-1000 ease-in-out hover:bg-gradient-to-b  hover:from-[#F2F2F2] hover:to-gray-300'>
      <div className='flex justify-center items-center bg-none'>
        <img src={logo} alt="logo" className='w-[200px] h-[200px] object-contain' />
      </div>
      <div className='flex flex-col justify-start items-center'>
        <h2 className={`${styles.heading2} mt-2`}>{name}</h2>
        <div className='flex border-b-[3px] border-[#020000] w-[50%] my-5 rounded-full' />
        <p className={`${styles.paragraph} w-[90%] font-medium lg:text-[30px] text-[10px] mb-3`}>{description}</p>
        <a href={url} className={`${styles.paragraph} absolute bottom-5 font-semibold`}>Check it out!</a>
      </div>
    </div>
  );
}

export default ProjectCard;