// eslint-disable-next-line no-unused-vars
import React from "react";
// import { TfiNotepad } from "react-icons/tfi";
import styles from "../styles/brand.module.css";
import { PiRewindCircleLight } from "react-icons/pi";
import Notepad from '/notepad.png';
import "./Brand.css";
export const Brand = () => {
  return (
    <header className={styles.header}>
      <div className="relative flex">
        <a href="https://mybabb.github.io/MyBABB-Remember/">
          <div className={styles.iconContainer}>
            <img src={Notepad} alt="Notepad" width={192}/>
            <span className="absolute z-10    
             top-[.25rem] left-[1.25rem] text-red-400 ">
              <PiRewindCircleLight    size={45} />
            </span>
          </div>
        </a>
      </div>
      <div className={styles.brandTitle}>
        <h1 className="betaVersion font-LibreBaskerville-Bold text-red-400">
          Beta-Version
        </h1>
        <bold>Password Generator</bold>
      </div>
    </header>
  );
};
