const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
        setTaskList(taskList.filter((_, i) => i !== index));
    }
    
    const colors = [
        'from-purple-400 to-purple-600',
        'from-blue-400 to-blue-600',
        'from-pink-400 to-pink-600',
        'from-green-400 to-green-600',
        'from-yellow-400 to-yellow-600',
        'from-red-400 to-red-600',
    ];
    
    const colorClass = colors[index % colors.length];
    
    return (
        <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-md`}>
                    <span className="text-white text-xl font-bold">✓</span>
                </div>
                <p className="text-gray-800 text-lg font-medium mb-6 break-words min-h-[60px]">
                    {task}
                </p>
                <button
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl py-3 px-4 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    onClick={handleDelete}
                >
                    🗑️ Delete Task
                </button>
            </div>
        </div>
    )
}

export default Board;