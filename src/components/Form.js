import React, { PureComponent } from 'react'
// import { useState } from 'react'


export class form extends PureComponent {
  render() {

    return (
      <>
        <div>
          <form className='new-item-form'>
              <div className='form-row'>
                  <label>New Item: </label>
                  <input type='text' id="item"/>
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
}

export default form
// exports this file so it can be imported by files dependent on it