import React from 'react'
import styles from '../style';
import Portrait from '../assets/Portrait.jpg'
import User from '../assets/user.svg'
import Contact from '../assets/mail.svg'
import Education from '../assets/book.svg'
import Activity from '../assets/activity.svg'

const Intro = () => {
  return (
    <div>
        <div className={`flex justify-between items-center mt-20`}>
            <div className={`w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] mb-[5%] ml-[30%] flex shadow-lg shadow-white transition-shadow duration-300 items-center justify-center`}>
                <img src={User} alt="about" className={`w-[24px] h-[24px]`}></img>
            </div>
            <div className={`w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] mr-[25%] shadow-lg shadow-white transition-shadow duration-300 flex items-center justify-center`}>
                <img src={Education} alt="education" className={`w-[24px] h-[24px]`}></img>
            </div>
        </div>
        <div className={`${styles.flexCenter} flex-col`}>
            <img src={Portrait} alt="portrait" className={`${styles.portrait} rounded-full`}></img>
            <h2 className={`${styles.heading2} text-white my-1`}>Khoa Tran</h2>
            <h3 className={`${styles.paragraph} text-dimWhite`}>Full Stack Developer</h3>
        </div>
        <div className={`flex justify-between items-center`}>
            <div className={`w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] ml-[25%] shadow-lg shadow-white transition-shadow duration-300 flex items-center justify-center`}>
                    <img src={Contact} alt="contact" className={`w-[24px] h-[24px]`}></img>
            </div>
            <div className={`w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] mt-[5%] mr-[30%] shadow-lg shadow-white transition-shadow duration-300 flex items-center justify-center`}>
                <img src={Activity} alt="activity" className={`w-[24px] h-[24px]`}></img>
            </div>
        </div>
    </div>
  )
}

export default Intro;