import React, {useState} from 'react'
// import { useState } from 'react'

function Form() {

  // Use state hooks up the current state to where we should affect the code, in this case
  //in the text input area
  //newItem is the value of our thing (todo task)
  //setNewItem is a function of updating our value
    const [newItem, setNewItem] = useState("")

    // setNewItem("Todo task One")


    return (
      <>
        <div>
          <form className='new-item-form'>
              <div className='form-row'>
                  <label>New Item: </label>
                  <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id="item"/>
              </div>
              <button className='btn' type='Submit'>Add</button>
          </form>
        </div>

        {/* header of the todo list */}
        <h1 className='header'>Todo List</h1>

        {/* items in the todo list */}
        <ul className='list'>
          <li>
            <label>
              <input type='checkbox'/>
              Item 1
            </label>
            <button className='btn btn-danger'>Delete</button>
          </li>

          <li>
            <label>
              <input type='checkbox'/>
              Item 2
            </label>
            <button className='btn btn-danger'>Delete</button>
          </li>

          <li>
            <label>
              <input type='checkbox'/>
              Item 3
            </label>
            <button className='btn btn-danger'>Delete</button>
          </li>
        </ul>

      </>
    )
}

export default Form
// exports this file so it can be imported by files dependent on it