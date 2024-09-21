import React from 'react'
import ThemeSwitch from './ThemeSwitcher'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-2'>
        <div className='text-5xl font-light  '>
        ForgeToken
        </div>
        <div><ThemeSwitch /></div>
    </div>
  )
}

export default Navbar