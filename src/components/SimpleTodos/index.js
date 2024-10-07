import { useState } from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
    {
        id: 1,
        title: 'Book the ticket for today evening',
    },
    {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
    },
    {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
    },
    {
        id: 5,
        title: 'Order fruits on Big Basket',
    },
    {
        id: 6,
        title: 'Fix the production issue',
    },
    {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
    },
    {
        id: 8,
        title: 'Get essentials for Sunday car wash',
    },
]

function SimpleTodos() {
    const [todosList, setTodosList] = useState(initialTodosList)

    const onDeleteTodo = (id) => {
        const filteredTodoList = todosList.filter(eachTodo => eachTodo.id !== id)
        setTodosList(filteredTodoList)
    }

    return (
        <div className="app-container">
            <div className="simple-todos-container">
                <div className="simple-todos-content">
                    <h1 className="heading">Simple Todos</h1>
                    <ul className="lists-container">
                        {todosList.map(eachTodo => (
                            <TodoItem
                                todoDetails={eachTodo}
                                key={eachTodo.id}
                                onDeleteTodo={onDeleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SimpleTodos