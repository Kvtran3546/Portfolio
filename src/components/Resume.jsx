import React from 'react';
import styles from '../style';
import arrow from '../assets/arrow.svg';
import {c_plus,
    c,
    javascript,
    java,
    python,
    microsoft,
    mongodb,
    postgre,
    powerbi,
    react_img,
    swift,
    visual_studio,
    css,
    html,
    tailwindcss} from '../assets';

const Resume = () => {
    const skills = [
        {name:'Java', logo: java}, 
        {name:'SQL', logo: postgre},  
        {name:'Python', logo: python},  
        {name:'Java Script', logo: javascript},   
        {name:'C', logo: c},   
        {name:'C++', logo: c_plus},  
        {name:'CSS', logo: css},  
        {name:'HTML', logo: html},   
        {name:'Swift', logo: swift},   
        {name:'React', logo: react_img},   
        {name:'TailwindCSS', logo: tailwindcss},   
        {name:'MongoDB', logo: mongodb},   
        {name:'PowerBI', logo: powerbi},    
        {name:'Visual Studio', logo: visual_studio},    
        {name:'MS Office', logo: microsoft},    
    ]
    const courses = [
        'Data Base Management I & II',
        'Data Structures',
        'Algorithms',
        'Operating Systems',
        'Computer Architecture',
        'Web Development',
        'Agile Development',
        'Discrete Structures',
        'System Programming',
        'Theory of Computation',
        'Princ. of Programming Languages',
        'Security, Privacy, and Society',
    ];
    const experience = [
        'Dialogue Across Borders',
        'Koo Chinese Academy',
        'Stevens Institute of Technology',
    ];
    const position = [
        'Full Stack Developer',
        'Software Engineer Intern',
        'Python Teacher',
        'Computer Science Tutor'
    ]
    const NWF = [
        'Developed and deployed NWF Strategies\' and many of the company\'s clients\' website.',
        'Improved the performance of Hugging Face Panels.',
        'Translated Figma layouts into functional code using Locify and Webflow.'

    ]
    const DAB = [
        'Assisted in reviving the website to promote intercultural awareness between Arab-West and Muslim-Christian communities.',
        'Resolved database accessibility issues to facilitate article and report storage.',
        'Migrated the application from Drupal 7 to Drupal 9.',
    ]
    const KCA = [
        'Prepared and delivered intensive summer Python coursework.',
        'Managed two classrooms of 15 students, conducting 20 hours of instruction per week.',
    ];
    const SIT = [
        'Provided tutoring in Systems Programming, Data Structures and Algorithms, and Computer Architecture and Design.',
        'Conducted both virtual and in-person one-on-one and group tutoring sessions.',
    ];
    const workExp = [
        NWF,
        DAB,
        KCA,
        SIT,
    ];
  
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='border-b-[2px] border-gray-300 w-[80%] mb-20'></div>
        <div id="Experience" className='flex flex-col items-center justify-between w-[100%]'>
            <div className='lg:w-[60%] w-[80%] flex flex-row justify-between items-center'>
                    <h2 className={`${styles.heading2} mr-3`}>Experience</h2>
                    <div className="w-[900px] border-2 border-black"></div>
                </div>
            <div className='lg:w-[55%] w-[70%] flex flex-row justify-between items-center'>
                <div></div>
                <div className="w-[800px] flex flex-col ">
                    {experience.map((item, index) => (
                        <div key={index}>
                            <div className='flex flex-row justify-between items-center border-b-[1px] border-gray-500'>
                                <h3 className={`${styles.heading3} text-[20px] font-semibold`}>{item}</h3>
                                <h3 className='italic'>{position[index]}</h3>
                            </div>
                            
                            {workExp[index].map((item, index) => (
                                <div className='ml-7 flex flex-row justify-start items-center my-3'>
                                    <img src={arrow} alt="arrow" className='w-[15px] h-[15px] mr-2'/>
                                    <p key={index} className=''>{item}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      <div id="Skills" className='flex flex-col items-center justify-between w-[100%]'>
        <div className='lg:w-[60%] w-[80%] flex flex-row justify-between items-center'>
            <h2 className={`${styles.heading2} mr-3`}>Skills</h2>
            <div className="w-[900px] border-2 border-black"></div>
        </div>
        <div className='lg:w-[60%] w-[80%] flex flex-row justify-between items-center'>
            <div></div>
            <div className="w-[900px] flex flex-grid flex-wrap justify-center items-center">
            {skills.map((skill, index) => (
                <div key={index} className="my-3 mx-2 flex justify-center items-center rounded-md">
                    <img src={skill.logo} alt={skill.name} className="w-20" />
                </div>
            ))}
            </div>
        </div>
      </div>
      <div id="Courses" className='flex flex-col items-center justify-between w-[100%]'>
        <div className='lg:w-[60%] w-[80%] flex flex-row justify-between items-center'>
            <h2 className={`${styles.heading2} mr-3`}>Courses</h2>
            <div className="w-[900px] border-2 border-black"></div>
        </div>
        <div className='lg:w-[60%] w-[80%] flex flex-row justify-between items-center'>
            <div></div>
            <div className="w-[900px] h-[200px] flex flex-wrap justify-center items-center">
            {courses.map((course, index) => (
                <div key={index} className="h-[30px] bg-gray-400 my-3 mx-2 flex justify-center items-center rounded-md">
                <span className='mx-2'>{course}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;