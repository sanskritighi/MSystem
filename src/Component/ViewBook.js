import {useEffect,useState} from 'react'
import axios from '../api/axios'
import { useAuth } from '../Context/auth'
import { ordinal } from '../Utils/helpers'

const PageButton = ({link,callback}) => {
    var label=link?.label.replace(/&laquo;|&raquo;|car/gi,'')
    return (
      <button onClick={callback} className={`px-4 py-2 hover:bg-gray-300 rounded-md ${link?.active?"bg-green-500 text-white":'bg-gray-300'}`}><>{label}</></button>
    )
  }
    
  function ViewBook() {
  
      const {auth}=useAuth();
      const [books,setbooks]=useState([])
      const [loading,setLoading]=useState(false)
      const [pagelinks,setPagelinks]=useState([])
      const [currPage,setCurrPage]=useState('books')
      const [error,setError]=useState({
          status:false,
          message:''
      })
      const [roles,setRoles]=useState()
      
  
        const  getRoles= async ()=>{
          axios.get('books',{
            headers:{
              Authorization: `Bearer ${auth.token}`
            }
          }).then((result)=>{
             setRoles(result.data)
             console.log(result.data)
          }).catch((error)=>{
            console.log(error)
          })
        }
  
      useEffect(()=>{
        getRoles()
      },()=>{},[])
      
  

      useEffect(() => {
        const getbooks=()=>{
          if (currPage===null){
            return
          }
          setLoading(true)
          axios.get(currPage,{
            headers:{
              Authorization: `Bearer ${auth.token}`
            }
          }).then((res)=>{
            console.log(res.data)
            setbooks(res.data?.data)
            setPagelinks(res.data?.links)
            console.log(books)
          }).catch((err)=>{
            setError({status:true,message:err.response.data.message})
            console.log(err)
          }).finally(()=>{
            setLoading(false)
  
          })
        }
        getbooks()
        
      
        return () => {
          
        }
      }, [currPage])
      
  
  
    return   loading?
    <div className='w-full text-center'>
      <h1 className='text-lg font-semibold text-gray-800'>Loading...</h1>
    </div>
    :
    error.status?
    <div className='w-full p-5 text-center'>
      <h1 className='text-lg font-semibold tracking-wider text-orange-400'>{error.message}</h1>
    </div>
    :
    (
      <div className='w-full h-full p-2'>
        <div className='w-full'>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Author</th>
              <th className='px-4 py-2'>Publisher</th>
              <th className='px-4 py-2'>Year</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Shared By</th>
            </tr>
          </thead>
          {
            <tbody>
            {books?.map((book)=>{
              return (
                <tr>
                  <td className='border px-4 py-2'>
                    <div className='flex flex-col gap-2'>
                    <span>{ordinal(book.edition)} edition</span>
                    <span>{book.name}</span>
                    </div>
                  </td>
                  <td className='border px-4 py-2'>{book.author}</td>
                  <td className='border px-4 py-2'>
                    {book.publication}
                  </td>
                  <td className='border px-4 py-2'>
                    {book.published_year}
                  </td>
                  <td className='border px-4 py-2'>
                  {book.price}
                  </td>
                  <td className='border px-4 py-2'>
                    {book.added_by}
                    </td>
                </tr>
              )
            })}
          </tbody>
          }
          </table>
        </div>
        <div className='mt-2 w-full px-4 py-2 flex gap-2 flex-wrap'>
          {
            pagelinks.map((link,index)=>{
              return <PageButton key={index} link={link} callback={()=>setCurrPage(link?.url)} />
            })
          }
        </div>
      </div>
    )
  }
  
  export default ViewBook