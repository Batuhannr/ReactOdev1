import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import ListComp from './List'
import './style.css'
function Component() {
    
    const [todolist, settodolist] = useState([
        {
            id:1,
            text: "First To Do ",
            situation: false

        },
        {
            id:2,
            text: "Second To Do ",
            situation: false

        },
        {
            id:3,
            text: "Third To Do ",
            situation: false

        },
        {
            id:4,
            text: "fourth To Do ",
            situation: true

        },
        {
            id:5,
            text: "Fifth To Do ",
            situation: true

        },
        {
            id:6,
            text: "Sixth To Do ",
            situation: false
        }
    ]);
    useEffect(() => {
        
    }, [todolist])

    return (
        <div id='container'>
            <h1 className='baslik'>My Todo List Application</h1>
            <ListComp todoList={todolist} settodolist={settodolist} />
            <Footer todo={todolist} settodolist={settodolist}/>
        </div>
    )
}

export default Component