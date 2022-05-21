import React, { useState } from 'react'
import { addNewPost } from '../api'
import {
    useHistory
  } from "react-router-dom"

export default function PostSubmissionForm(props) {

    const {token, setAction, action} = props
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [deliver, setDeliver] = useState(false)
    const history = useHistory()

    const postPage = async () =>{
        history.push("/posts")
        await setAction(!action)
    }

    class Post {
        constructor(title, description, price, location, deliver){
            this.title = title;
            this.description = description;
            this.price = price;
            this.location = location;
            this.willDeliver = deliver;
        }
    }

  return (
<div className='container col-6 vh-100'>
    <form className='container align-middle'
    onSubmit = {(e)=>{
            e.preventDefault();
            let postObject = new Post(title, description, price, location, deliver)
            addNewPost(postObject, token);
            postPage();}}>

        <div className='form-group' style={{margin:"16px 8px 16px 8px"}}>

            <label htmlFor="title">Title</label>
            <input type="text" id="title" className='form-control' style={{marginBottom:"16px"}}
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}/>

            <label htmlFor="description">Description</label>
            <textarea type="text" id="description"className='form-control' rows="3" style={{marginBottom:"16px"}}
            value={description}
            onChange={(e=>{setDescription(e.target.value)})}/>

            <label htmlFor="price">Price</label>
            <input type="text" id="price" className='form-control' style={{marginBottom:"16px"}}
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}/>

            <label htmlFor="location">Location</label>
            <input type="text" id="location" className='form-control' style={{marginBottom:"16px"}}
            value={location}
            onChange={(e)=>{setLocation(e.target.value)}}/>

            <input type="checkbox" className='form-check-input' id="delivery" style={{marginRight:"8px"}}
            value={deliver}
            onClick={()=>{setDeliver((!deliver))}}/>
            <label htmlFor="delivery" style={{marginBottom:"16px"}}>Willing to deliver?</label>
            
            <br></br>
            <div className='row justify-content-md-center'>
                <button type="submit" className='btn btn-primary'>Create Post</button>
            </div>
        </div>
    </form>
</div>
  )
}
