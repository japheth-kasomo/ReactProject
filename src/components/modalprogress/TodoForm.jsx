import React, { useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [showInput, setShowInput] = useState(true)
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    
  },[]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
    setShowInput(!showInput)
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <div className=" w-full h-[40px] flex items-center justify-between rounded border-[1px] border-[#1880F0] p-[12px]">
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="w-[90%] h-[38px] outline-none"
            />
            <button onClick={handleSubmit} className="">
              <TiTick className="w-[24px] h-[24px] text-[#667085]" />
            </button>
          </div>
        </>
      ) : (
        <>
        {showInput && <div className=" w-full h-[40px] flex items-center justify-between rounded border-[1px] border-[#1880F0] p-[12px]">
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className=" w-[90%] h-[38px] outline-none"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="">
              <TiTick className="w-[24px] h-[24px] text-[#667085]" />
            </button>
          </div>}
           
        </>
      )}
    </form>
  );
}

export default TodoForm;
