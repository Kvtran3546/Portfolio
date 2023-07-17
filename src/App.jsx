import styles from './style';
import {Navbar, Contact, Intro, Fun, Projects, Resume} from "./components"


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div >
        <div id="Intro"  className='h-[700px] '>
          <Intro />
        </div>
      </div>
      <div>
        <div id="Resume" >
          <Resume />
        </div>
        <div id="Contact" className='h-[900px] '>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
