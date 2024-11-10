import { Link } from "react-router-dom";
 
 
import styles from "./styles/brand.module.css";
import { PiRewindCircleLight } from "react-icons/pi";
import Notepad from '/notepad2.png';
import Lock from '/lock80px.png';
import "./Brand.css";
export const Brand = () => {
  return (
    <header className={styles.header}>
     
      <div className="relative flex">
        <Link to="/todo">
          <div className="fixed
           right-1 top-4">
          <img src={Lock} alt="Safe Lock" />
        </div>
        </Link>

        <Link to="/todo">
          <div className={styles.iconContainer}>
            <img src={Notepad} alt="Notepad" width={192}/>
            <span className="absolute z-10    
             top-[-.75rem] left-[.75rem] text-amber-400 ">
              <PiRewindCircleLight    size={65} />
            </span>
          </div>
         </Link>
      </div>
      <div className={styles.brandTitle}>
        <h1 className="lockedVersion font-LibreBaskerville-Bold text-amber-400">
          Safe-Lock
        </h1>
        <bold>Password Generator</bold>
      </div>
    </header>
  );
};
