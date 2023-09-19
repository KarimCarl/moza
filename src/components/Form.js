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



      </>
    )
  }
}

export default form
// exports this file so it can be imported by files dependent on it