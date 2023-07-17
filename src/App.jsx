import styles from './style';
import {Navbar, Contact, Intro, Fun, Projects, Resume} from "./components"


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='h-[700px]'>
          <Intro />
        </div>
      </div>
      <div>
        <div>
          <Resume />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
