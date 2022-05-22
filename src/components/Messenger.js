import React, {useState} from 'react'
import { Collapse } from 'bootstrap' 
import { messagePost } from '../api'
import { useHistory } from 'react-router-dom'

export default function Messenger(props) {
    const {
        postId,
        user,
        token,
        action,
        setAction
    } = props

    const [message, setMessage] = useState("")
    const history = useHistory()

    return (
<form onSubmit={ (e)=>{
    e.preventDefault();
    messagePost(postId, message, token)
    history.push("/profile")
    setAction(!action)
    setMessage("")}}>

    <button type="button" 
        className='btn btn-info' 
        data-bs-toggle="collapse" 
        data-bs-target={`#postID${postId}`}>
        Contact
    </button>

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
            Message 
        </button>
    </div>
</form> 
  )
}
