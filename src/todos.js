import React from 'react';

function todos({todos, deleteItem, setCheckMark}) {
    const todosList = todos.length ? (
        todos.map((item) => {
            var checked = false;
            if(item.isChecked) {
                checked = "checked";
            }
            return(
                <div className="collection-item" key={item.id}>
                    <span>{item.title} <b onClick={() => {deleteItem(item.id)}}>(remove)</b></span>
                    <label>
                        <input onClick={() => {setCheckMark(item.id)}} type="checkbox" class="filled-in" checked={checked} />
                        <span></span>
                    </label>                    
                </div>
            );
        })
    ) : (
        <p className="center no-todos-text">You have no todo's left, yay!</p>
    ); 
    return(
        <div className="todos collection container">
            {todosList}
        </div>
    );
}

export default todos;