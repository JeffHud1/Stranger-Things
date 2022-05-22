import React from 'react'
import Messenger from './Messenger'

export default function Mailbox(props) {
    
        const userId = props.userInfo?._id
        const userMessages = props.userInfo?.messages
        const {token, setAction, action} = props

   return (
    <>
    {userMessages ?
     <div className='container'>
         <div className='row align-items-start'>
            <div className='col'>
                <div className='card text-center' style={{marginBottom:"8px"}}>
                    <div className='card-body'>
                        <h3 className='card-title'>Outbox</h3>
                    </div>
                </div>
                {userMessages.map((message)=>{
                    return (message.fromUser._id === userId ? 
                <div className="card" style={{marginBottom:"8px"}} key={message._id}>
                        <div className='card-body'>
                        <h5 className='card-title'>Regarding: {message.post.title}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>From: {message.fromUser.username}</h6>
                        <p className='card-text'>{message.content}</p>
                    </div>
                </div>
                    :
                    null)
                })}
            </div>
            <div className='col'>
            <div className='card text-center' style={{marginBottom:"8px"}}>
                    <div className='card-body'>
                        <h3 className='card-title'>Inbox</h3>
                    </div>
                </div>
                {userMessages.map((message)=>{
                    return (message.fromUser._id !== userId ? 
                        <div className="card" style={{marginBottom:"8px"}} key={message._id}>
                            <div className='card-body' >
                            <h5 className='card-title'>Regarding: {message.post.title}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>From: {message.fromUser.username}</h6>
                            <p className='card-text'>{message.content}</p>
                            <Messenger
                            token={token} 
                            setAction={setAction} 
                            action={action} 
                            user={message.fromUser.username} 
                            postId={message.post._id} />
                        </div>
                    </div>
                    :
                    null)
                })}
            </div>
         </div>
     </div>
    : 
    null
}
    </>
  )
}

