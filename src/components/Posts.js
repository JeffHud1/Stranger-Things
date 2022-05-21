import React from 'react'
import {default as Messenger} from "./Messenger";
import {default as PostPatcher} from "./PostPatcher";
import {
    deletePost
  } from "../api";


export default function Posts(props) {
    const {
        posts,
        token,
        action,
        setAction
    } = props;


  return (
    <div className='container col-6'>
      {token ? 
        <>
        {posts.map((post) => {
            return  <div className="card" key={post._id} style={{marginBottom: "16px"}}>
                        <div className='card-body'>

                            <h5 className='card-title'>{post.title}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>{post.price}</h6>
                            <p className='card-text'>{post.description}</p>
                            <p className='card-text'>{post.location}</p>

                            {post.isAuthor ? null :
                            <Messenger 
                            postId={post._id} 
                            user={post.author.username} 
                            token={token} 
                            action={action} 
                            setAction={setAction}/>
                            }

                            <div className='d-flex justify-content-between'>
                                {post.isAuthor ?  
                                <PostPatcher post={post}/>
                                : null}
                                {/* {post.isAuthor ? <button className='btn btn-warning' onClick={(e)=>{
                                    e.preventDefault();
                                }}>Update Post</button> : null} */}
                                <br></br>
                                {post.isAuthor ? <button className='btn btn-danger'onClick={(e)=>{
                                    e.preventDefault();
                                    deletePost(post._id, token);
                                    setAction(!action);
                                }}> Delete Post</button> : null}
                            </div>
                        </div> 
                    </div>
        })}
        </> 
        : 
        <>
        {posts.map((post) => {
            return  <div className="card" key={post._id} style={{marginBottom: "16px"}}>
                        <div className='card-body'>

                            <h5 className='card-title'>{post.title}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>{post.price}</h6>
                            <p className='card-text'>{post.description}</p>
                            <p className='card-text'>{post.location}</p>
                        </div> 
                    </div>
        })}
        </>
        }
    </div>
  )
}