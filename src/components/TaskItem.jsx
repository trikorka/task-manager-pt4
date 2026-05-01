function TaskItem({ task, deleteTask }) {
    return (
        <div className="task-item">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>
                Удалить
            </button>
        </div>
    );
}

export default TaskItem;