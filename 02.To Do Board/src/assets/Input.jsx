import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            setTaskList([...taskList, input]);
            setInput("");
        }
    }

    return (
        <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center bg-white rounded-2xl shadow-xl p-3 border-2 border-purple-100">
                <input
                    className="flex-1 px-6 py-4 text-lg bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                    type="text"
                    placeholder="What do you need to do today?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                    ✨ Add Task
                </button>
            </div>
        </form>
    )
}
export default Input