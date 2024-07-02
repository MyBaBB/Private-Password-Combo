/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiFastForward } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import "./Todo.css";
import { FiRewind } from "react-icons/fi";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <div className="relative   hidden justify-center xxs:flex">
        
        <div className="passwordManager text-center ">
        <span
          className="passwordNotepad mt-2  whitespace-nowrap font-NovaCut-Regular text-[10px]
 xxs:block  xs:text-[24px] text-center  "
        >
        Password
        </span>
        <span
          className="passwordNotepad    whitespace-nowrap font-NovaCut-Regular text-[10px]
 xxs:block  xs:text-[24px]   "
        >
        Manager
        </span>
        </div>
        <div className="absolute right-0  ">
          <a href="/password">
            <div className=" relative z-50    inline-block    ">
              <span className=" inline-block ">
                <FaUserSecret size={27} />
              </span>
              &nbsp;&nbsp;
              <span className="fastForwardButton mt-2 inline-block text-[#84bcfc] ">
                <FiFastForward size={30} />
              </span>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="new-item-form relative m-auto mb-4  flex w-[90%] "
      >
        <textarea
          className="placeHolder1 min-h-[18px]  w-full rounded-lg border-2  
                          border-black pt-1 text-center font-LibreBaskerville-Bold hover:opacity-80"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Type here"
        />

        <button
          className="btn3 relative m-auto mb-8 flex justify-center  from-blue-700 to-blue-950  text-blue-50 
         hover:bg-gradient-to-b "
        >
          <span className="font-PTSerif-Bold">Add Secret</span>
        </button> 
      </form>
    </>
  );
}
