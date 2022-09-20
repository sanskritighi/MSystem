
import Validation from '../Utils/Validation'
import React,{useState} from 'react';


function Changepw() {
        const [values,setValues] = useState({
          OPassword:"",
          NPassword:"",
          CPassword:"",
          
      });
      const [errors,setErros] =useState({});
      const handleChange =(event)=>{
       setValues({
           ...values,
           [event.target.name]:event.target.value,
       }) ;
      }
      const handleForSubmit =(event) =>{
        event.preventDefault(event);
        setErros(Validation(values));
      };
  return (
      <>
      <div className="bg-gray-300 w-full h-screen flex items-center justify-center p-3">


      <form className="bg-white shadow-lg rounded px-8 pt-3 pb-8 mb-4 md:w-1/3 lg:w-1/2">


          {/* for old password */}


          <div className='mb-4 text-left'>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="Old Password">
                  Old Password:
              </label>

              <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
              id="old password" 
              type="password"
               placeholder="Old Password"
               name="OPassword" 
               value={values.OPassword}
           onChange={handleChange} />
            {errors.OPassword && <p className='mt-1 text-red-700 pl-2'>{errors.OPassword}</p>}
            
          </div>

          {/* for new password */}

          <div className='mb-4 text-left'>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="new password">
                  New Password:
              </label>

              <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
              id="new password" 
              type="password"
               placeholder="New Password"
               name="NPassword" 
               value={values.NPassword}
               onChange={handleChange} />
               {errors.NPassword && <p className='mt-1 text-red-700 pl-2'>{errors.NPassword}</p>}
               {errors.MPassword && <p className='mt-1 text-red-700 pl-2'>{errors.MPassword}</p>}

            

          </div>

           {/* for change password */}
          <div className='mb-4 text-left'>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="change Password">
                  Change Password:
              </label>

              <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="change password" 
              type="password"
               placeholder="change Password"
               name="CPassword"
               value={values.CPassword}
              onChange={handleChange} />
             {errors.CPassword && <p className='mt-1 text-red-700 pl-2'>{errors.CPassword}</p>}
             {errors.MPassword && <p className='mt-1 text-red-700 pl-2'>{errors.MPassword}</p>}

            



    {/* <div className="flex flex-col items-center justify-between">
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       type="button">
        Save
      </button> */}
             

          </div>

          <div className="flex flex-col items-center justify-between">
      <button className="w-full bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={handleForSubmit}
       type="button">
        Save
      </button> 
      </div>

      </form>

      </div>
          


      </>


  )
}

export default Changepw
