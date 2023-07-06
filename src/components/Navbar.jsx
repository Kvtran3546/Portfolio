import React, {useState} from 'react'
import { navLinks } from '../constants';
import styles from '../style';

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center navbar'>  
        <ul className="list-none sm:flex hidden justify-center items-center flex-1 mt-4">
            {navLinks.map((nav, index) => (
            <li className={`${styles.paragraph} mx-10 text-white hover:text-dimWhite `}>
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;