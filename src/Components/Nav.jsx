import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  return (
    <nav className="w-full bg-gray-100 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="font-extrabold text-2xl text-blue-600">NEWS 24/7</div>

        <div className="flex gap-6 text-lg font-medium mt-3 sm:mt-0">
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-500 transition-colors"
          >
            News
          </button>
          <button
            onClick={() => navigate("/Bookmark")}
            className="hover:text-blue-500 transition-colors"
          >
            Bookmark
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
