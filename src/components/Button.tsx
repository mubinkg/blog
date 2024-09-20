import React from 'react'

type IProps={
    title: string
}

const Button = ({title}:IProps) => {
  return (
    <button className='px-8 py-4 rounded-full hover:bg-[orange]' style={{borderBottom: "1px solid #BDBDBD"}}>
        {title}
    </button>
  )
}

export default Button
