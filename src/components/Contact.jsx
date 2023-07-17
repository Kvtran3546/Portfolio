import React, {useState, useEffect, useRef} from 'react'
import {useForm} from 'react-hook-form'
import styles from '../style'

const Contact = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = (data) => console.log(data)
  console.log(watch("email"))
  return (
    <div className='h-[600px] flex flex-col justify-center items-center mb-[150px]'>
      <div className='border-b-[2px] border-gray-300 w-[80%] mb-10'></div>
      <div className='w-[50%] flex flex-col justify-center items-center'>
        <h1 className={`w-[50%] font-navigator text-[30px] font-semibold leading-[56px] tracking-tight text-center text-font my-5`}>Contact Me :)</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-[500px] py-3 px-5 rounded-md'>
          <input placeholder="NAME" {...register("name", {required: true, minLength:2})} className={`bg-main border-b-2 mb-3 py-2 px-2 text-font w-full transition-colors hover:border-black border-gray-400`} style={{ outline: 'none' }}></input>
          <input placeholder="EMAIL" {...register("email", {required: true, })} className={`bg-main border-b-2 mb-3 py-2 px-2 text-font w-full transition-colors hover:border-black border-gray-400`} style={{ outline: 'none' }}></input>
          <input placeholder='MESSAGE' {...register("message")} className={`bg-main border-b-2 mb-3 py-2 px-2 text-font w-full transition-colors hover:border-black border-gray-400`} style={{ outline: 'none' }}></input>
          <input type="submit" value="Send" className='text-font text-[20px] rounded-full bg-secondary border-[2px] border-black hover:bg-black hover:text-white w-[200px] transition-all mt-10'/>
        </form>
      </div>
    </div>
  )
}

export default Contact;