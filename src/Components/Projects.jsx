import React from 'react'
const Projects = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
        <img src="src/assets/p1.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
        <img src="src/assets/p2.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
        <img src="src/assets/p3.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
        <img src="src/assets/p4.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
        <img src="src/assets/p5.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
        <img src="src/assets/p6.webp" loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto my-6 mx-6' />
      </div>
    </div>
  )
}

export default Projects
