import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListOfBlog from './pages/admin/ListOfBlog'
import Comment from './pages/admin/Comment'
import Login from './component/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'

const App = () => {

  const {token} = useAppContext()
  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>

        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='addBlog' element={<AddBlog/>}/>
          <Route path='listBlog' element={<ListOfBlog/>}/>
          <Route path='comments' element={<Comment/>}/>
        
        </Route>

        <Route path='/about-hashblog' element={<About/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
        <Route path='/contact' element={<Contact/>}/>





      </Routes>
      
      
    </div>
  )
}

export default App
