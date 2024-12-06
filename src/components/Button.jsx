import React from 'react'

const Button = ({title,id,rightIcon,LeftIcon,containerClass}) => {
  return (
    <button id={id} className={`group z-10 relative w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
       <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <div>{title}</div>
       </span>
        {LeftIcon}
    </button>
  )
}

export default Button