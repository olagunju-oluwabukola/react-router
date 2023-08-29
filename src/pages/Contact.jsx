import React from 'react'

const contact = () => {
  return (
    <div>
        <h1>Lodge your complaints here</h1>
        <form action="">
            <label htmlFor="">Your name:</label>
           <br /> <input type="text" placeholder='Enter your name' />
          <br />  <textarea name="" id="" cols="30" rows="10">Enter complaint</textarea>
            <br /><button>Submit</button>
        </form>
    </div>
  )
}

export default contact