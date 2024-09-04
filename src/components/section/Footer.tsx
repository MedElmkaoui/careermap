

import { footerData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'

function Footer() {
  const footer = footerData
  return (
    <div className='bg-dark p-12 grid lg:grid-cols-5 space-y-3 justify-between'>
      <div className='text-secondary space-y-3 '>
        <Image src={footer.logo} alt='' width={150} height={20} />
        <p className='w-[90%]'>{footer.description}</p>
      </div>
      {
        footer.sections.map((ele)=> (
           <div key={ele.title} className='space-y-3.5'> 
            <h2 className='text-xl'>{ele.title}</h2>
            <ul className='text-secondary space-y-2'>
              {
                ele.items.map((item)=> (
                  <li key={item}>{item}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
     
    </div>
  )
}

export default Footer