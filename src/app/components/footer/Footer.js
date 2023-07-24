import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='  flex justify-between'>
        
        <div>
            2023 lamamia program ltd.
        </div>
        <div className=' flex space-x-4'>
        <Image width={25} height={15} src='/logo2.png' alt='visa'></Image> 
        <Image width={25} height={15} src='/logo3.png' alt='cart2'></Image> 
        <Image width={25} height={15} src='/21.png' alt=' cart'></Image> 
        </div>
    </div>
  )
}

export default Footer