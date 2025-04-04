import React from 'react'

const SignupForm = () => {
  return (
    <div className='flex flex-col items-center border border-black rounded m-4 p-4 w-1/4'>

      <div className='flex'>
        <p className='text-bold'>Signup</p>
      </div>

      <div className='flex flex-col p-4'>
        <label>Enter name:</label><input placeholder='Enter name' className='border border-black rounded'/>

        <label>Enter Email:</label><input placeholder='Enter email' className='border border-black rounded'/>

        <label>Enter password:</label>
        <input placeholder='Enter password' className='border border-black rounded'/>

        <button className='border bg-blue-600 text-white rounded p-2 px-4'>
          Submit
        </button>

      </div>

    </div>
  )
}

export default SignupForm
