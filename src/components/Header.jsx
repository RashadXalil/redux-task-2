import * as React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">Drivers</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  )
}

export default Header
