import React from 'react'

type IProps = {
    time: string
    title: string
    note?: string
    noteBody?: string
    content: string
}

const Agenda = ({time, title, note, noteBody, content}:IProps) => {
  return (
    <div className='flex gap-10'>
      <div>
        <h1>{time}</h1>
      </div>
      <div>
        <h1 className='text-xl font-bold mb-2 border-l-orange-400 border-l-2'>{title}</h1>
        <ul className='list-disc ml-5'>
            {
                note && (
                    <li>
                        <p className='text-orange-400'><span className='text-primary'>{note}</span> : {noteBody}</p>
                    </li>
                )
            }
            <li>
                {content}
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Agenda
