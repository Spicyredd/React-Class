// name, price, author

import React, { useState } from 'react'

const Book = () => {
    let [name, setName] = useState("")
    let [price, setPrice] = useState()
    let [author, setAuthor] = useState("")
  return (
    <div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Book details submitted");
        console.log(name)
        console.log(price)
        console.log(author)
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
        <label>Price:</label>
        <input type="number"
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
        ></input>
        <label>Author:</label>
        <input type="text"
                onChange={(e) => {
                    setAuthor(e.target.value)
                }}
        ></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Book
