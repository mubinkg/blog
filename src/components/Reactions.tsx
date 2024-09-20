import React from 'react'
import Like from './icons/Like'
import Comment from './icons/Comment'
import Love from './icons/Love'

type IProps = {
    like?: number
    love?: number
    comment?: number
}

const Reactions = ({ like, comment, love }: IProps) => {
    return (
        <div className='flex content-center items-center gap-10'>
            {
                like && (
                    <div className='flex gap-3 text-xl items-center'>
                        <Like />
                        {like}
                    </div>
                )
            }
            {
                love && (
                    <div className='flex gap-3 text-xl items-center'>
                        <Love />
                        {love}
                    </div>
                )
            }
            {
                comment && (
                    <div className='flex gap-3 text-xl items-center'>
                        <Comment />
                        {comment}
                    </div>
                )
            }
        </div>
    )
}

export default Reactions
