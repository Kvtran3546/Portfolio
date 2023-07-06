import styles from './style';
import {Navbar, Contact, Intro, Fun, Projects} from "./components"


function App() {
  return (
    <div>
      <div>
        <div className=''>
          <Navbar />
        </div>
      </div>
      <div>
        <div>
          <Intro />
        </div>
      </div>
      <div>
        <div>
          <Projects />
          <Fun /> 
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
