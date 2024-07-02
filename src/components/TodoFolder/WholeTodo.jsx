import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";
 
import WebApp from "../MainWrapper/PWAFolder/WebApp";
 
 
import { CgCopy } from "react-icons/cg";
 
import Copyright from "./CopyrightNotes";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      const newTodo = { id: crypto.randomUUID(), title, lockedTodo: false };
      if (addToTop) {
        return [newTodo, ...currentTodos];
      } else {
        return [...currentTodos, newTodo];
      }
    });
  }

  function toggleTodo(id, lockedTodo) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, lockedTodo };
        }

        return todo;
      });
    });
  }

   

 

 
  // switches input from top to bottom
  const [addToTop] = useState(true);
  

 

  const [isRandomEmojiEnabled, setIsRandomEmojiEnabled] = useState(true);
  function toggleRandomEmoji() {
    setIsRandomEmojiEnabled((prevValue) => !prevValue);
  }

  function getRandomEmoji() {
    const emojis = [
    "🔐"
    ];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return isRandomEmojiEnabled ? emojis[randomIndex] : "";
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function copyAllTodosNormal() {
    let todosText = "";
    todos
      .filter((todo) => !todo.lockedTodo)
      .forEach((todo, index) => {
        const emoji = getRandomEmoji();
        todosText += index + 1 + ". " + emoji + " " + todo.title + " " + "\n";
      });
    navigator.clipboard.writeText(todosText);
  }



  return (
    <>
    <div className="bigTodoWrapper">
      <div
        className="controlContainer relative m-auto w-[95%] max-w-[550px] flex-row rounded-3xl
         border-2 border-black  p-4">
        <div className="relative flex-row ">
          <NewTodoForm onSubmit={addTodo} />
        </div>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        {/* Copy All Options Folder  Temporary xxxxxxx hidden xxxxxxxxx */}

        <div
          className="copyAllOptions 
          relative z-[1] m-auto    mt-[-1.3rem] flex-col 
           items-center  rounded-lg px-[2rem]"
        >
          
          
            <div className="subButtonWrapper  m-auto w-full ">
              <button
                onClick={() => {
                  copyAllTodosNormal();

                  const alertBox = document.createElement("div");
                  alertBox.textContent =
                    "🔐 All Unlocked Items Copied";
                  alertBox.classList.add(
                    "fixed",
                    "bottom-[25%]",
                    "left-[50%]",
                    "transform",
                    "-translate-x-[50%]",
                    "-translate-y-[3.4rem]",
                    "bg-red-950",
                    "py-2",
                    "px-4",
                    "border-2",
                    "border-yellow-800",
                    "rounded-lg",
                    "shadow-lg",
                    "z-50",
                    "font-PTSerif-Bold",
                     "text-amber-50",
                  );
                  document.body.appendChild(alertBox);
                  setTimeout(() => {
                    alertBox.remove();
                  }, 2000);
                }}
                className="btn2  copyButton   relative m-auto my-1 flex
            justify-center   from-green-600
                 to-green-950    hover:bg-gradient-to-b "
              >
                <span className="relative flex w-full justify-between  font-PTSerif-Bold text-[9px] xxs:text-[12px] xs:text-[15px] ">
                  {" "}
                  <span className="font-PTSerif-Bold  ">Copy List</span>
                  <span className="text-9px absolute left-1/2 hidden translate-x-[0%] text-[9px]  text-blue-300 sm:block">
                    (Copy for Transfer)
                  </span>{" "}
                </span>
                <span className="inline-block">
                  <CgCopy />
                </span>
              </button>
            </div>
            
          </div>
          
          <Copyright />
        </div>
       
         <div className=" mb-[-1rem] mt-[1rem] mx-8">
        <WebApp />
      </div>
      </div>

      
    </>
  );
}
