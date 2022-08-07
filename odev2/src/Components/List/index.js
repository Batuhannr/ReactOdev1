import React, { useState } from 'react'

function ListComp({todoList,settodolist}) {
    const [filtertext, setfilettext] = useState('');
    const checkTodo = (e) => {
        let newTodos = todoList.map((todo) => {
          if (parseInt(todo.id) === parseInt(e.target.id)) {
            return { ...todo, situation: !todo.situation };
          }
          return todo;
        });
        settodolist(newTodos); 
      };
      














    const filtered = todoList.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filtertext.toLowerCase());
        });
    });


    return (

        <div >
          <input 
      placeholder='Filter Contact'
      value={filtertext}
      onChange={(e)=>setfilettext(e.target.value)}/>
            <ul>
                {filtered.map((todo, i) => <li className='inputlar' key={i}>
                    
                    <input  id={todo.id}  type="checkbox"
                defaultChecked={todo.situation} onClick={(checkTodo)}></input>
                    &nbsp; {todo.id} - {todo.text}</li>)}
            </ul>
        </div>
    )
}

export default ListComp