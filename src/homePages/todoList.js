import React, { useState } from "react";
import doneIcon from "../imgs/baseline-done-24px.svg"

const TodoList = () => {
    const todoThing = [
        {
            value: 'react',
            done: false
        },
        {
            value: 'redux',
            done: false
        }
    ]
    const [todoItems, setTodoItems] = useState(todoThing);
    const addItem = (text) => {
        const newItem = {
            index: todoItems.length + 1,
            value: text,
            done: false
        }
        setTodoItems([newItem, ...todoItems]);
    }

    const removeItem = (itemIndex) => {
        // console.log(`removeItem Index:  ${itemIndex}`)
        const newTodoItems = todoItems.filter((item, index) => { return index !== itemIndex });
        setTodoItems(newTodoItems);
        return newTodoItems;
    }

    const markTodoDone = (itemIndex) => {
        const todoItem = { value: todoItems[itemIndex].value, done: !todoItems[itemIndex].done };
        const newTodoItems = removeItem(itemIndex);
        todoItem.done ? setTodoItems([...newTodoItems, todoItem]) : setTodoItems([todoItem, ...newTodoItems]);
    }

    return (
        <div>
            <TodoHeader />
            <TodoListBody items={todoItems} removeItem={removeItem} markTodoDone={markTodoDone} />
            <TodoForm addItem={addItem} />
        </div>
    )
}

const TodoHeader = () => {
    return (
        <h4 className="mb-3" style={{ color: "#61DAFB", margin: "0 0 0 5%" }}>Todo List</h4>
    )
}

const TodoListBody = ({ items, removeItem, markTodoDone }) => {
    const showItems = items.map((item, index) => {
        return (
            <TodoListItem key={index} item={item} index={index} removeItem={removeItem} markTodoDone={markTodoDone} />
        );
    })
    return (
        <ul className="list-group" >{showItems}</ul>
    )
}

const TodoListItem = ({ index, item, removeItem, markTodoDone }) => {
    const onClickClose = () => {
        removeItem(index);
    }

    const onClickDone = () => {
        markTodoDone(index);
    }
    const itemStyle = item.done ? { color: "red", textDecoration: "line-through" } : { color: "green", textDecoration: "none" }
    return (
        <li className="list-group-item mx-sm-3 mb-2">
            <div>
                <img src={doneIcon} alt="doneIcon" onClick={onClickDone} />
                <span style={{ fontSize: "20px", ...itemStyle }}>{item.value}</span>
                <button type="button" className="close" onClick={onClickClose}>&times;</button>
            </div>
        </li>
    )
}

const TodoForm = ({ addItem }) => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }
    const handleClick = () => {
        if (text) {
            addItem(text);
            setText('');
            document.getElementById('todoInput').focus();
        }
    }

    return (

        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" id="todoInput" className="form-control" placeholder="add a new todo.." value={text} onChange={handleChange} />
            </div>
            <button type="button" className="btn btn-outline-info mb-2" onClick={handleClick}>Add</button>
        </form>

    )
}

export default TodoList;