import React from 'react'

const Navbar = ({totalNotes}) => {
  return (
    <section className="nav">
      <h1 className="logo">FireNote</h1>
      <p>Total Notes - 
       <span>{totalNotes}</span>
      </p>
    </section>
  )
}

export default Navbar
