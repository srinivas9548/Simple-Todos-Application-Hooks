import './index.css'

const TodoItem = props => {
    const { todoDetails, onDeleteTodo } = props
    const { title, id } = todoDetails

    const deleteTodo = () => {
        onDeleteTodo(id)
    }

    return (
        <li className="todo-item-container">
            <p className="title">{title}</p>
            <button type="button" className="button" onClick={deleteTodo}>
                Delete
            </button>
        </li>
    )
}

export default TodoItem