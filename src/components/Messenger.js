import React, {useState} from 'react'
import { Collapse } from 'bootstrap' 
import { messagePost } from '../api'

export default function Messenger(props) {
    const {
        postId,
        user,
        token,
        action,
        setAction
    } = props

    const [message, setMessage] = useState("")

    return (
<form onSubmit={ (e)=>{
    e.preventDefault();
    console.log("before api message post", action)
    console.log(action)
    messagePost(postId, message, token, action, setAction)
    console.log("after api, but before action update", action)
    console.log(setAction)
    setAction(!action)
    console.log("action update", action)
    setMessage("")}}>
    <button type="button" className='btn btn-info' 
    data-bs-toggle="collapse" 
    data-bs-target={`#postID${postId}`}>
        Contact</button>
        <br></br>
    <div className='collapse' id={`postID${postId}`}>
        <label htmlFor='message'>Message User: {user}</label>
        <textarea 
            className='form-control' 
            id="message" 
            rows="3" 
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}/>
        <button type="submit" className='btn btn-success' style={{marginTop:"8px"}}
            data-bs-toggle='collapse'
            data-bs-target={`#postID${postId}`}> 
            Message </button>
    </div>
</form> 
  )
}
