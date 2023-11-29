import { useState } from "react";
import React from 'react'

function Submit() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");

  };
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name : </label>
            <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>

        <fieldset>
          <h2>Feedback Form</h2>
          <div className='Field'>
            <label>Score :</label>
            <input type="range" min="0" max="10" />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>

    </div>
  )
}

export default Submit;
