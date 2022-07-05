import React, { useRef, useState } from "react";
import "./style.scss";
import clearImg from "../../assets/clear.jpeg";
const AddTodoBar = ({ addTodo }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef();
    const inputContainerRef = useRef();

    const submitInput = () => {
        inputRef.current.zoom = "0%";
        addTodo(input);
        setInput("");
    };
    return (
        <div className="add-todo-bar">
            <div
                className="input-element"
                onClick={() => {
                    inputRef.current.focus();
                    inputContainerRef.current.classList.add("focus-input");
                }}
                ref={inputContainerRef}
            >
                <input
                    type={"text"}
                    placeholder={"add details"}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                    onBlur={() =>
                        inputContainerRef.current.classList.remove(
                            "focus-input"
                        )
                    }
                    onKeyDown={(key) => {
                        if (key.key === "Enter" && input.length)
                            submitInput(input);
                    }}
                />
                {input.length > 0 && (
                    <img
                        src={clearImg}
                        alt="clear icon"
                        onClick={() => setInput("")}
                    />
                )}
            </div>
            <button
                disabled={!input.length}
                className={input.length ? "add-btn" : "disabled"}
                onClick={submitInput}
            >
                Add
            </button>
        </div>
    );
};

export default AddTodoBar;
