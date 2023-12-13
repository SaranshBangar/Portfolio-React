import React from 'react'
import {
    FaDribbble,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'
//import person from '../assets/person.jpg'

const Home = () => {
  return (
    <>
        <div className='flex flex-2 flex-col w-full -lg:mr-12 lg:h-max border rounded-md gap-12 p-24 bgclass'>
            <h1 className='font-afacad text-6xl font-semibold'>
                {`Hello, I'm Abo, a product Designer With 7 years of experience`}
            </h1>

            <h3 className='text-xl font-afacad font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam Lorem, ipsum dolor.?
            </h3>

            <div className='flex flex-row mt-12 gap-8'>
                <button className='bg-black hover:bg-grey-800 px-8 py-2 text-white rounded-xl transition-all'>Contact Me</button>
                <button className='bg-white text-black p-4 hover:bg-cyan-600 rounded-full border text-2xl transition-all'><FaDribbble /></button>
                <button className='bg-white text-black p-4 hover:bg-cyan-600 rounded-full border text-2xl transition-all'><FaInstagram /></button>
                <button className='bg-white text-black p-4 hover:bg-cyan-600 rounded-full border text-2xl transition-all'><FaTwitter /></button>
                <button className='bg-white text-black p-4 hover:bg-cyan-600 rounded-full border text-2xl transition-all'><FaLinkedin /></button>
            </div>
        </div>
        <img src="src/assets/person.jpg" loading='eager' className='flex flex-1 w-96  h-auto lg:h-fit rounded'/>
    </>
  )
}

export default Home
