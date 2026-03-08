import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../component/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const { axios, setToken, navigate } = useAppContext()

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    setToken(null)
    navigate('/')
  }

  return (
    <div className='bg-background min-h-screen'>

      {/* Navbar */}
      <div className='flex items-center justify-between h-[70px] px-6 border-b bg-white shadow-sm'>

        <img
          src={assets.logo}
          className='w-32 cursor-pointer'
          onClick={() => navigate('/')}
        />

        <button
          onClick={logout}
          className='flex items-center gap-2 bg-blue-400 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition'
        >
          <i className="ri-logout-box-line"></i>
          Logout
        </button>

      </div>

      {/* Layout */}
      <div className='flex h-[calc(100vh-70px)]'>

        <Sidebar />

        <div className='flex-1 overflow-y-auto'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Layout