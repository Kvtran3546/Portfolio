import React, {useState} from 'react'
import styles from '../style';
import Portrait from '../assets/Portrait.jpg'
import User from '../assets/user.svg'
import Contact from '../assets/mail.svg'
import Education from '../assets/book.svg'
import Activity from '../assets/activity.svg'
import Copy from '../assets/copy.svg'
import LinkedIn from  '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Check from '../assets/check.svg'
import 'typeface-nunito';

const Intro = () => {
    const [expandAbout, setExpandAbout] = useState(false);
    const [expandEducation, setExpandEducation] = useState(false);
    const [expandContact, setExpandContact] = useState(false);
    const [expandActivity, setExpandActivity] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const handleAbout = () => {
      setExpandAbout(!expandAbout);
    };
    const handleEducation = () => {
      setExpandEducation(!expandEducation);
    };
    const handleContact = () => {
      setExpandContact(!expandContact);
    };
    const handleActivity = () => {
      setExpandActivity(!expandActivity);
    };
    const handleEmailButtonClick = () => {
      const email = "Kvtran3546@gmail.com"; // The email string you want to copy
      navigator.clipboard.writeText(email)
        .then(() => {
          console.log(`Copied email: ${email}`);
        })
        .catch((error) => {
          console.error("Failed to copy email:", error);
      });
      setCopiedEmail(!copiedEmail);
      if (copiedPhone) {
        setCopiedPhone(!copiedPhone);
      }
    };
    
    const handlePhoneButtonClick = () => {
      const phone = "201-790-8762"; // The email string you want to copy
      navigator.clipboard.writeText(phone)
        .then(() => {
          console.log(`Copied phone number: ${phone}`);
        })
        .catch((error) => {
          console.error("Failed to copy phone number:", error);
      });
      setCopiedPhone(!copiedPhone);
      if (copiedEmail) {
        setCopiedEmail(!copiedEmail);
      }
    };
    
    const handleLinkedInButtonClick = () => {
      // Logic for handling the LinkedIn button click
      console.log('LinkedIn button clicked');
    };
    
    const handleGithubButtonClick = () => {
      // Logic for handling the Github button click
      console.log('Github button clicked');
    };

    return (
      <div className={`relative flex justify-center h-[542px]`}>
        <div className={`absolute top-[189px] flex flex-col items-center`}>
          <img src={Portrait} alt="portrait" className={`${styles.portrait} rounded-full`}></img>
          <h2 className={`text-white my-1`}>Khoa Tran</h2>
          <h3 className={`text-dimWhite`}>Full Stack Developer</h3>
        </div>
        <div onMouseEnter={handleAbout} onMouseLeave={handleAbout}
          className={`absolute hover_box top-[15%] left-[32%] w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] shadow-lg shadow-white flex items-center justify-center hover:w-[500px] hover:h-[230px] hover:bg-gray-300`}>
          {expandAbout? 
              <div className="content bg-gray-300 py-2 px-3">
                  <h1 style={{fontFamily: 'Nunito, sans-serif'}} className='text-[30px] text-black w-inherit h-inherit '>About</h1>
                  <p className={`text-[15px] text-black w-inherit h-inherit my-3`}>My name is Khoa Tran, and I am a passionate and dedicated software engineer. I have a strong foundation in computer science and a keen interest in building intuitive and efficient applications. I possess strong time management skills and adaptability. Outside of my professional pursuits, I enjoy playing badminton, snowboarding, engaging in charity work, following F1 racing, and have a passion for stand-up comedy.</p>
              </div>
              :
              <img src={User} alt="about" className={`w-[24px] h-[24px]`}/>
            }
        </div>
        <div onMouseEnter={handleEducation} onMouseLeave={handleEducation}
          className={`absolute hover_box top-[27%] right-[27%] w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] shadow-lg shadow-white flex items-center justify-center hover:w-[300px]  hover:bg-gray-300 hover:h-[150px]`}>
          {expandEducation? 
            <div className="content bg-gray-300 py-2 px-2">
              <h1 style={{fontFamily: 'Nunito, sans-serif'}} className='text-[30px] text-black w-inherit h-inherit'>Education</h1>
              <h2 className={`text-[20px]`}>Stevens Institute of Technology</h2>
              <div className='bg-gray-300 flex flex-1 justify-between'>
                <h3 className={`text-[10px] italic`}>BS, Computer Science </h3> 
                <h3 className={`text-[10px] italic`}>September, 2020 - Present </h3>
              </div>
              <ul className={`list-disc text-[12px] mt-[5px] ml-[20px]`}>
                <li>
                  Maintained a 3.88 GPA
                </li>
                <li>
                  President of the Badminton Club
                </li>
              </ul>
            </div> 
            : 
            <img src={Education} alt="education" className={`w-[24px] h-[24px]`}/>}
        </div>
        <div onMouseEnter={handleContact} onMouseLeave={handleContact}
          className={`absolute hover_box bottom-[20%] left-[25%] w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] shadow-lg shadow-white flex items-center justify-center hover:w-[400px] hover:h-[110px]  hover:bg-gray-300`}>
            {expandContact? 
              <div className="content bg-gray-300 my-2 mx-2">
                <h1 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-[30px] text-black w-inherit h-inherit'>Contacts</h1>
                <div className='bg-gray-300 flex flex-row flex-1 justify-between'>
                  <button className={`${copiedEmail? "bg-black": "bg-gray-300"} border-[2px] border-black rounded-full flex items-center justify-center h-[48px] w-[133px] px-2 mr-1`} onClick={handleEmailButtonClick}>
                    {copiedEmail? 
                    <img src={Check} alt="check" className={`w-[24px] h-[24px]`}></img>
                    :
                    <img src={Copy} alt="copy" className={`w-[24px] h-[24px]`}></img>
                    }
                    {copiedEmail?
                      <h3 className='text-[12px] text-white ml-2'>Copied</h3>
                      :
                      <h3 className='text-[12px] text-black ml-2'>Copy Email</h3>
                    }
                  </button>
                  <button className={`${copiedPhone? "bg-black": "bg-gray-300"} border-[2px] border-black rounded-full flex items-center justify-center h-[48px] w-[133px] px-2 mr-1`} onClick={handlePhoneButtonClick}>
                    {copiedPhone? 
                      <img src={Check} alt="check" className={`w-[24px] h-[24px]`}></img>
                      :
                      <img src={Copy} alt="copy" className={`w-[24px] h-[24px]`}></img>
                    }
                    {copiedPhone?
                      <h3 className='text-[12px] text-white ml-2'>Copied</h3>
                      :
                      <h3 className='text-[12px] text-black ml-2'>Copy Phone</h3>
                    }
                  </button>
                  <button className={`bg-gray-300 border-[2px] border-black rounded-full flex items-center justify-center w-[48px] h-[48px] mr-1`} onClick={handleLinkedInButtonClick}>
                    <img src={LinkedIn} alt='linkedin' className='w-[24px] h-[24px]'/>
                  </button>
                  <button className={`bg-gray-300 border-[2px] border-black rounded-full flex items-center justify-center w-[48px] h-[48px] `} onClick={handleGithubButtonClick}>
                    <img src={Github} alt='github' className='w-[24px] h-[24px]'/>
                  </button>
                </div>
              </div>
              : 
              <img src={Contact} alt="contact" className={`w-[24px] h-[24px]`}/>
            }
        </div>
        <div pnmouseEnter={handleActivity} onMouseLeave={handleActivity}
          className={`absolute hover_box bottom-[8%] right-[35%] w-[88px] h-[88px] rounded-lg bg-black border-gray-300 border-[2px] shadow-lg shadow-white flex items-center justify-center hover:w-[300px]  hover:bg-gray-300`}>
            {expandActivity? 
              <div className="content bg-gray-300 py-2 px-2">
                <h1 style={{fontFamily: 'Nunito, sans-serif'}} className='text-[30px] text-black w-inherit h-inherit'>Activity</h1>
                
              </div> 
              : 
              <img src={Activity} alt="activity" className={`w-[24px] h-[24px]`}/>
            }
        </div>
      </div>
    );
  };
  
  export default Intro;
  
  