import React from "react";
import "./style.scss";

const TrashIcon = ({ color, dimensions }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        width={dimensions}
        height={dimensions}
        viewBox="0 0 24 24"
    >
        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
    </svg>
);

export default function TodosList({
    todos,
    completeTodo,
    removeTodo,
    removeAllTodos,
    activeTab,
}) {
    return (
        <div className="todos-list">
            {todos.map((todo) => (
                <div className="todo" key={todo.id}>
                    <input
                        type={"checkbox"}
                        checked={todo.isDone}
                        readOnly
                        onClick={() => completeTodo(todo)}
                    />
                    <p
                        className={todo.isDone ? "complete-todo" : ""}
                        onClick={() => completeTodo(todo)}
                    >
                        {todo.text}
                    </p>
                    {activeTab === 2 && (
                        <div onClick={() => removeTodo(todo)}>
                            <TrashIcon color={"black"} dimensions={20} />
                        </div>
                    )}
                </div>
            ))}
            {activeTab === 2 && todos.length > 0 && (
                <button onClick={() => removeAllTodos()}>
                    <TrashIcon color={"white"} dimensions={15} /> Delete
                    Completed Todos
                </button>
            )}
            {!todos.length && <h4>No todos found!</h4>}
        </div>
    );
}
