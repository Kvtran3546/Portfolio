import styles from './style';
import {Navbar, Contact, Intro, Fun, Projects, Resume} from "./components"


function App() {
  return (
    <div className='relative'>
      <Navbar />
      <div >
        <div id="Intro"  className='h-[90vh]'>
          <Intro />
        </div>
      </div>
      <div>
        <div id="Resume" >
          <Resume />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact" className='h-[900px] '>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
