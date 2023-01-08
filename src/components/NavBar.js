import React from 'react'

const NavBar = () => {
  return (
    <header>
        <div className='d-flex flex-column flex-md-raw p-3 border-bottom bg-secondary text-white'>
            <h4 className='mr-md-auto'>
                <a href='/' className='text-decoration-none text-white'> BOOKS </a>
            </h4>
        </div>
    </header>
  )
}

export default NavBar