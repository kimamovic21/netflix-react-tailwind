import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Netflix from '../images/Netflix.jpg';
import {UserAuth} from '../context/AuthContext';
import { async } from '@firebase/util';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='w-full h-screen'>

        <img className='hidden sm:block absolute w-full h-full object-cover'
             src={Netflix} 
             alt="Netflix logo" />
          {/* overlay div */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-[#fff]'>
            <div className='max-w-[320px] mx-auto py-16'>

                <h1 className='text-3xl font-bold'>Sign up</h1>

                <form onSubmit={handleSubmit}
                      className='w-full flex flex-col py-4'
                      action=''>
                  <input onChange={(e) => setEmail(e.target.value)}
                         className='p-3 my-2 bg-gray-700 rounded placeholder-[#e4dcdc]'
                         type="text"
                         placeholder='Email' 
                         autoComplete='email'
                  />
                  <input onChange={(e) => setPassword(e.target.value)}
                         className='p-3 my-2 bg-gray-700 rounded placeholder-[#e4dcdc]'
                         type="password" 
                         placeholder='Password'
                         autoComplete='current-password'
                  />

                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                    Sign up
                  </button>

                  <div className='flex justify-between items-center text-sm text-gray-400'>
                    <p><input className='mr-2'
                              type="checkbox" />Remember me</p>
                    <p>Need some help ?</p>
                  </div>

                  <p className='py-5'>
                    <span className='text-gray-400 p-2'>
                      Already subscribed to Netflix ?
                    </span>
                    Sign in.
                  </p>
                  
                </form>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Signup;