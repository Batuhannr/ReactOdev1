import React, { useState } from 'react'

function Footer({todo,settodolist}) {
  const [filtertext, setfilettext] = useState('');

  
const OnChangeFormActive= (e)=>{
    setfilettext(false)
    settodolist(filtered)
    console.log("Active basıldı");
}
const OnChangeFormAll= (e)=>{
  settodolist(todo)
  console.log("Hepsine basıldı")

}
const OnChangeFormComplated= (e)=>{
  setfilettext(true)
  settodolist(filtered)
  console.log("Tamamlanana basıldı");

}

  const filtered = todo.filter((item) => {
    return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(filtertext);
    });
});





    var active = 0;
    for (let index = 0; index < todo.length; index++) {
        if (todo[index].situation === false) {
            active++;
        }
        
    }
  return (
    <div>
        <label >{active}</label>
        <button className='buttonlar' onClick={OnChangeFormAll}> All</button>
        <button className='buttonlar'  onClick={OnChangeFormActive}> Active</button>
        <button className='buttonlar' onClick={OnChangeFormComplated}> Completed</button>
         
    </div>
  )
}

export default Footer