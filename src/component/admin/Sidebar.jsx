import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
    ${isActive
      ? "bg-primary/10 text-primary font-medium"
      : "text-gray-600 hover:bg-gray-100 hover:text-primary"
    }`

  return (
    <div className='flex flex-col md:w-60 min-h-full border-r bg-white p-4'>

      <NavLink end to='/admin' className={linkStyle}>
        <i className="ri-dashboard-line text-lg" title='Dashboard'></i>
        <p className='hidden md:block'>Dashboard</p>
      </NavLink>

      <NavLink to='/admin/addBlog' className={linkStyle}>
        <i className="ri-add-circle-line text-lg" title='Add Blog'></i>
        <p className='hidden md:block'>Add Blog</p>
      </NavLink>

      <NavLink to='/admin/listBlog' className={linkStyle}>
        <i className="ri-file-list-3-line text-lg" title='List Blog'></i>
        <p className='hidden md:block'>List Blog</p>
      </NavLink>

      <NavLink to='/admin/comments' className={linkStyle}>
        <i className="ri-chat-3-line text-lg" title='Comments'></i>
        <p className='hidden md:block'>Comments</p>
      </NavLink>

    </div>
  )
}

export default Sidebar