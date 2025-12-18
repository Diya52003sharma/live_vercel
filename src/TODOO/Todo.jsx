import React, { useReducer, useState } from "react";

/* Reducer */
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (action.text.trim() === "") return state;
      return [...state, action.text];

    case "DELETE":
      return state.filter((_, index) => index !== action.index);

    default:
      return state;
  }
}

function TodoBasic() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
           Todo List
        </h2>

        {/* INPUT + BUTTON */}
        <div className="flex gap-2 mb-6">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            onClick={() => {
              dispatch({ type: "ADD", text });
              setText("");
            }}
            className="bg-cyan-600 text-white px-4 py-2 rounded-md
                       hover:bg-cyan-700 transition"
          >
            Add
          </button>
        </div>

        {/* TODO LIST */}
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100
                         px-4 py-2 rounded-md shadow-sm"
            >
              <span className="text-gray-800">
                {todo}
              </span>

              <button
                onClick={() => dispatch({ type: "DELETE", index })}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded
                           hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default TodoBasic;
