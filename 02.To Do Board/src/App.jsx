import { useState } from "react";
import Input from "./assets/Input";
import Board from "./assets/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
              To Do Board
            </h1>
            <p className="text-gray-600 text-lg">Organize your tasks efficiently</p>
          </div>
          <Input taskList={taskList} setTaskList={setTaskList} />
        </div>
        
        {taskList.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-xl">No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto pb-8">
            {
              taskList.map((task, index) => (
                <Board
                  key={index}
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default App
