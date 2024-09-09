// name,section,nooOfStudents
import React, { useState } from 'react'

const Class = () => {
    let [name, setName] = useState("")
    let [section, setSection] = useState("")
    let [noOfStudents, setnoOfStudents] = useState()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Class details submitted");
        console.log(name)
        console.log(section)
        console.log(noOfStudents)
    }
    }
    >
      <div>
        <label>Name:</label>
        <input type="text"
        onChange={(e) => {
            setName(e.target.value)
        }}
        ></input>
        <label>Section:</label>
        <input type="text"
                onChange={(e) => {
                    setSection(e.target.value)
                }}
        ></input>
        <label>No of students:</label>
        <input type="number"
                onChange={(e) => {
                    setnoOfStudents(e.target.value)
                }}
        ></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Class
