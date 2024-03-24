import { useState,useEffect } from 'react'

function Navbar() {

  return (
    <> 
        <nav className="bg-gray-800 p-4 ">
            <div className="container mx-auto">
                <a href="/" className="text-white font-bold text-lg p-4">Home</a>
                <a href="/login" className="text-white font-bold text-lg p-4">Login</a>
                <a href="/register" className="text-white font-bold text-lg p-4">Register</a>
                <a href="/cart" className="text-white font-bold text-lg p-4">Cart</a>
                <a href="/admin" className="text-white font-bold text-lg p-4">Admin</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
