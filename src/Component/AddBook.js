
import React from 'react'
import Select from 'react-select'


function AddBook() {

const faculties=[
  {value:'CSIT',label:'CSIT'},
  {value:'BIM',label:'BIM'},
  {value:'BCA',label:'BCA'},
  {value:'BHM',label:'BHM'},
]

const semester=[
  {value:1,label:'First'},
  {value:2,label:'Second'},
  {value:3,label:'Third'},
  {value:4,label:'Fourth'},
  {value:5,label:'Fifth'},
  {value:6,label:'Sixth'},
  {value:7,label:'Seventh'},
  {value:8,label:'Eighth'},
]

  return (
    <>

    <div className='shadow-md p-3 w-full'>
      <h2 className='font-semibold text-gray-600 text-2xl p-3'> Add </h2>

      {/* for Form */}
      <form className='outline flex flex-col flex-wrap justify-center items-center md:flex-row gap-2 outline-2 outline-gray-400 rounded-md lg:pl-10 px-3 py-4 w-full '>

        {/* for Name */}
        <div className='w-full flex flex-col gap-1 md:w-full'>
          <label htmlFor='name' className='block text-gray-700 font-semibold'> Name</label>
            <input  required id='name' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1'/>
        </div>

        {/* for Author */}
        <div className='w-full flex flex-col gap-1 md:w-full'>
          <label htmlFor='author' className='block text-gray-700 font-semibold'> Author</label>
            <input id='author' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1' />
        </div>

          {/* for Publication */}
        <div className='w-full flex flex-col gap-1'>
          <label  htmlFor='publication' className='block text-gray-700 font-semibold' > Publication</label>
            <input  id='publication' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1' />
        </div>

        {/* for Edition */}
        <div className='w-full flex flex-col gap-1' >
          <label  htmlFor='edition' className='block text-gray-700 font-semibold'> Edition</label>
            <input min={1} id='edition' type='number' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1'/>
        </div>

        {/* for Publisher */}
        <div className='w-full flex flex-col gap-1'>
          <label htmlFor='publisher' className='block text-gray-700 font-semibold'> Publisher</label>
            <input id='publisher' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1' />
        </div>

        {/* for prefix */}
        <div  className='w-full flex flex-col gap-1'>
          <label htmlFor='prefix' className='block text-gray-700 font-semibold'>Prefix</label>
            <input id='prefix' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1' />
        </div>

        {/* for Faculty*/}
        <div className='w-full flex flex-col gap-1'>
          <label htmlFor='faculty' className='block text-gray-700 font-semibold'>Faculty</label>
            <Select name='faculty' options={faculties} isMulti />
        </div>

        {/* for Semester */}
        <div className='w-full flex flex-col gap-1'>
        <label htmlFor='semester' className='block text-gray-700 font-semibold'>Semester</label>
          <Select name='semester' options={semester} />
        </div>

        {/* for Book Type */}
        <div className='w-full flex flex-col gap-1'>
                        <label for='booktype' className='block text-gray-700 font-semibold'>Book Type</label>
                        <input id='booktype' type='text' className='w-full appearance-none border shadow-sm border-[#CCCCCC] bg-white rounded  px-2 py-1' />
                </div>

                {/* for button */}

                <div className='w-full mt-5 flex justify-center'>
                    <button className='bg-blue cursor-pointer font-semibold text-white rounded-md text-center p-2 w-40 hover:bg-green-400'>Add</button>
                </div>

      
      </form>
    </div> 
    </>
  )
}

export default AddBook






