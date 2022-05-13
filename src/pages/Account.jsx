import React from 'react';
import SavedShows from '../components/SavedShows';
import Netflix from '../images/Netflix.jpg';

const Account = () => {
  return (
    <>

      <div className='w-full text-[#fff]'>
        <img className='w-full h-[400px] object-cover'
             src={Netflix} 
             alt="Netflix image" 
        />

      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>

       <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            My shows
          </h1>
       </div>
      </div>
      <SavedShows/>

    </>
  )
}

export default Account;