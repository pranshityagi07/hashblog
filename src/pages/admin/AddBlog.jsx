import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import {parse} from 'marked'

const AddBlog = () => {

  const { axios } = useAppContext()
  const [ isAdding , setIsAdding ] = useState(false)
  const [ isLoading , setIsLoading ] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)



  const [image , setImage] = useState(false)
  const [title , setTitle] = useState('')
  const [subTitle , setSubTitle] = useState('')
  const [category , setCategory] = useState('Startup')
  const [isPublished , setIsPublished] = useState(false)

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title , subTitle , 
        description : quillRef.current.root.innerHTML,
        category , isPublished
      }

      const formData = new FormData()
      formData.append('blog' , JSON.stringify(blog))
      formData.append('image' , image)

      const { data } = await axios.post('/api/blog/add' , formData)
      if(data.success){
        toast.success(data.message)
        setImage(false)
        setTitle('')
        setSubTitle('')
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
        setIsPublished(false)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsAdding(false)
    }

  }

  const generateContent =async () => {
    if(!title) return toast.error('Please enter title')
    try {
      setIsLoading(true)
      const { data } = await axios.post('/api/blog/generate', {prompt: title})
      if(data.success){
        quillRef.current.root.innerHTML = parse(data.content)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }finally{
      setIsLoading(false)
    }
    
  }
  useEffect(() => {
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current , {theme : 'snow'})

    }

  },[])
  
  



  return (
    <form action="" onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload Thumbnail</p>
       
          <label for="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} id="image" type="file" class="hidden" required />
          </label>

          <p className='mt-4'>Blog title</p>
          <input type="text" placeholder='type here...' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setTitle(e.target.value)} value={title} />

          <p className='mt-4'>Blog Subtitle</p>
          <input type="text" placeholder='type here...' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setSubTitle(e.target.value)} value={subTitle} />

          <p className='mt-4'>Blog Description</p>
          <div className='max-w-lg h-80 pb-16 sm:pb-10 pt-2 relative'>
            <div ref={editorRef}></div>
            {
              isLoading && (
                <div className='absolute right-0 top-0 bottom-5.5  md:bottom-0 left-0 items-center justify-center bg-black/10 mt-2'>
                  <div className='w-8 h-8 rounded-full mx-auto mt-[35%]  border-2 border-t-white animate-spin '></div>

                </div>
              )
            }


            <button disabled={isLoading} type='button' onClick={generateContent} className='absolute bottom-7 md:bottom-2 right-2 ml-2  text-white bg-[#2563EB]/80 rounded-full text-sm text-primary px-4 py-1.5  hover:underline cursor-pointer' >Generate with AI</button>

          </div>

          <p className='mt-4'>Blog Category</p>
          <select onChange={(e)=> setCategory(e.target.value)} name="category" id="" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
            <option value="" selected disabled>select category</option>
            {blogCategories.map((category , index)=> {
              return <option key={index} value={category}>{category}</option>
            })}
          </select>

          <div className='flex gap-2 mt-4'>
            <p>Publish Now</p>
            <input type="checkbox" checked={isPublished} className='cursor-pointer scale-125' onChange={e => setIsPublished(e.target.checked)} />
          </div>
          <button disabled={isAdding} type='submit' className='mt- w-40 h-10 bg-[#2563EB] text-white rounded cursor-pointer text-sm mt-2'>{isAdding ? 'Adding...' : 'Add Blog'}</button>
      </div>

    </form>
  )
}

export default AddBlog
