import React from 'react'

type IProps = {
    title:string
    body:string
    note?:string
}

const Airticle = ({title, body, note}:IProps) => {
  return (
    <div>
      <h1 className='text-4xl mb-10 text-primary'>{title}</h1>
      <p className='text-body'>{body}</p>
      {
        note && <p className='text-body'><span className='font-bold'>Совет: </span>{note}</p>
      }
    </div>
  )
}

export default Airticle
