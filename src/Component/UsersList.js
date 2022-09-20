import {useEffect,useState} from 'react'
import axios from '../api/axios'
import {useAuth} from '../Context/auth'

import React from 'react'

const PageButton = ({link,callback}) => {
  var label=link?.label.replace(/&laquo;|&raquo;|car/gi,'')
  return (
    <button onClick={callback} className={`px-4 py-2 hover:bg-gray-300 rounded-md ${link?.active?"bg-green-500 text-white":'bg-gray-300'}`}><>{label}</></button>
  )
}




function ListUsers() {

    const {auth}=useAuth();
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)
    const [pagelinks,setPagelinks]=useState([])
    const [currPage,setCurrPage]=useState('users')
    const [error,setError]=useState({
        status:false,
        message:''
    })
    const [roles,setRoles]=useState()
    
    const mapRoleName=(id)=>{
      var role=roles.find(role=>role.id===id)
      return role?.name
    }

      const  getRoles= async ()=>{
        axios.get('roles',{
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
      const getUsers=()=>{
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
          setUsers(res.data?.data)
          setPagelinks(res.data?.links)
          console.log(users)
        }).catch((err)=>{
          setError({status:true,message:err.response.data.message})
          console.log(err)
        }).finally(()=>{
          setLoading(false)

        })
      }
      getUsers()
      
    
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
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Verified</th>
            <th className='px-4 py-2'>Role</th>
            <th className='px-4 py-2'>Active</th>
          </tr>
        </thead>
        {
          <tbody>
          {users?.map((user)=>{
            return (
              <tr>
                <td className='border px-4 py-2'>{user.name}</td>
                <td className='border px-4 py-2'>{user.email}</td>
                <td className='border px-4 py-2'>
                  <input type="checkbox" checked={user.email_verified_at?true:false} readOnly/>
                </td>
                <td className='border px-4 py-2'>{mapRoleName(user?.role_id)}</td>
                <td className='border px-4 py-2'>
                  <input type="checkbox" checked={!user.deleted_at?true:false} readOnly/>
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

export default ListUsers