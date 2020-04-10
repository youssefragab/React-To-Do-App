import React from 'react';

function todos({todos, deleteItem}) {
    const todosList = todos.length ? (
        todos.map((item) => {
            return(
                <div className="collection-item" key={item.id}>
                    <span onClick={() => {deleteItem(item.id)}}>{item.title}</span>
                </div>
            );
        })
    ) : (
        <p className="center">You have no todos, yay!</p>
    ); 
    return(
        <div className="todos collection">
            {todosList}
        </div>
    );
}

export default todos;