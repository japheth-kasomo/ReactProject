import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <>
      <div
        className="flex items-center justify-between w-full h-[40px] rounded-[4px] border-[1px] border-[#EEF0F2] bg-[#EFF4FF] px-[12px] py-[10px]"
        key={index}
      >
        <p
          className="font-Inter font-[500] text-[14px] leading-[20px] text-[#0A62E6]"
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.text}
        </p>
        <div className="flex items-center gap-[6px]">
          <button>
            <MdOutlineEdit
              className="w-[16px] h-[16px] text-[#0A62E6]"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
          </button>
          <button>
            <RiCloseLine
              className="w-[16px] h-[16px] text-[#0A62E6]"
              onClick={() => removeTodo(todo.id)}
            />
          </button>
        </div>
      </div>
    </>
  ));
};

export default Todo;
