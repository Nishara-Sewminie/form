import { useState } from "react";
import React from 'react'

function Submit() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
    if (Number(score)<=5 && comment.length<=10){
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

  };

  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name : </label>
            <input id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>

        <fieldset>
          <h2>Feedback Form</h2>


          <div className='Field'>
            <label>Score : {score}🌟</label>
            <input type="range"
            min="0" max="10"
            onChange={e => setScore=(e.target.value)}/>
          </div>

<div className="Field">
  <label>Comment : </label>
  <textarea value={comment} onChange={e => setComment(e.target.value)}/>
</div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>

    </div>
  )
}

export default Submit;
