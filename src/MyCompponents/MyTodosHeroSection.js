import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { v4 as uuidv4 } from "uuid";

function MyTodosHeroSection() {
  const [todos, setTodos] = useState("");
  const showTodo = async () => {
    // console.log(BACKEND_URL);
    let { data } = await axios.get(`${BACKEND_URL}/gettodo`);
    // console.log(data, data.todo);
    setTodos(data.todo);
  };

  useEffect(() => {
    showTodo();
  }, []);

  const editTodo = async (id) => {
    let todoTitle = prompt("Enter Your new Title");
    let todoTasks = prompt("Enter Your new Tasks");
    if (!(todoTitle && todoTasks)) {
      alert("Title and Tasks Both required.");
      return;
    }
    let data = {
      title: todoTitle,
      tasks: todoTasks,
    };

    await axios.put(`${BACKEND_URL}/edittodo/${id}`, data);
    // console.log(response);
    showTodo();
  };

  const addTask = async (id) => {
    let todoTasks = prompt("Enter New Tasks.");
    if (!todoTasks) {
      alert("Task required.");
      return;
    }

    let data = {
      tasks: todoTasks,
    };

    await axios.put(`${BACKEND_URL}/addtaskonly/${id}`, data);
    showTodo();
  };
  const editTitle = async (id) => {
    let todoTitle = prompt("Enter New Title.");
    if (!todoTitle) {
      alert("Title required.");
      return;
    }
    let data = {
      title: todoTitle,
    };
    await axios.put(`${BACKEND_URL}/edittitleonly/${id}`, data);
    showTodo();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${BACKEND_URL}/deletetodo/${id}`);
    alert("Todo Deleted.");
    showTodo();
  };

  return (
    <>
      {todos ? (
        todos.map((todo) => (
          <div key={uuidv4()}>
            <div className=" pt-4 pb-1 flex justify-center pl-8 pr-8 flex-col place-items-center gap-3   sm:pl-12 sm:pr-12 md:pl-16 md:pr-16  lg:pl-24 lg:pr-24 ">
              <div className="left">
                <h1 className="text-2xl font-bold ">{todo.title}</h1>
              </div>
              <div className="middle flex gap-4 md:gap-6 ">
                <button
                  onClick={() => {
                    editTodo(todo._id);
                  }}
                  className="bg-[#35BDD0] rounded-md text-[12px] p-1 sm:w-[80px] lg:text-sm lg:w-[100px] md:pt-2 md:pb-2 md:text-[17px] md:w-[110px] "
                >
                  Edit Todo
                </button>

                {/* <button className="bg-[#35BDD0] rounded-md text-[12px] p-1 sm:w-[80px] lg:text-sm lg:w-[100px] md:pt-2 md:pb-2 md:text-[17px] md:w-[110px] ">
                  Edit Task
                </button> */}
                <button
                  onClick={() => {
                    addTask(todo._id);
                  }}
                  className="bg-[#35BDD0] rounded-md text-[12px] p-1 sm:w-[80px] lg:text-sm lg:w-[100px] md:pt-2 md:pb-2 md:text-[17px] md:w-[110px] "
                >
                  Add Task
                </button>
                <button
                  onClick={() => {
                    editTitle(todo._id);
                  }}
                  className="bg-[#35BDD0] rounded-md text-[12px] p-1 sm:w-[80px] lg:text-sm lg:w-[100px] md:pt-2 md:pb-2 md:text-[17px] md:w-[110px] "
                >
                  Edit Title
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="bg-[#FF6263]  rounded-md text-[12px] p-1 sm:w-[80px] lg:text-sm lg:w-[100px] md:pt-2 md:pb-2 md:text-[17px] md:w-[110px] "
                >
                  Delete Todo
                </button>
              </div>
              <div className="right text-lg">
                {todo.tasks.map((task, index) => (
                  <div key={uuidv4()} className="flex flex-col gap-8">
                    <h3 className="font-semibold md:tracking-wider">
                      Task {index + 1}: {task}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <h1 className="text-lg mx-auto text-center pt-8 font-semibold">
          No Data Found in Database.
        </h1>
      )}
    </>
  );
}

export default MyTodosHeroSection;
