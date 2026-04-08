import React from 'react'


const Login = () => {
  return (
    <div className='container'>
        <div className='flex  justify-center items-center w-full h-screen'>
        <div className='w-[30%] h-[50%] flex justify-center items-center'>
            <form action="">
                <div className='w-full justify-around flex mb-5'>
                    <label htmlFor="" className='text-xl lg:text-2xl mb-3 md:mb-0'>Email:</label> 
                    <input type="text" className='text-xl lg:text-2xl border-black border-solid border-2' placeholder='Enter your Email' />
                </div>
                <div className='w-full justify-around md:flex mb-5'>
                    <label htmlFor="" className=' text-2xl lg:text-2xl mb-3 md:mr-2  md:flex md:mb-0'>Password:</label>
                    <input type="text" name="" id="" className='text-xl lg:text-2xl border-black border-solid border-2' placeholder='Enter your Password'/>

                </div>
                <div className='w-full justify-between flex mb-5 items-center'>
                      <button type='submit' className='text-xl lg:text-2xl bg-blue-600 p-2 w-36  rounded-md hover:bg-green-500'>Login</button>
                      <a href="" className='hover:text-blue-500 underline'>Forget password</a>
                </div>
              
               
               

            </form>
        </div>
    </div>
    </div>

    
  )
}

export default Login
