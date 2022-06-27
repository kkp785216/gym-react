import React, { useState } from 'react'
import './LeaveComment.css'

const LeaveComment = (props) => {
    const [comment, setComment] = useState({ name: "", email: "", message: "", website: "", url: props.postId, save_checked: false });
    const onChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const handleForm = (e) => {
        e.preventDefault();
        let url = "https://react4-backend.vercel.app/api/comments"
        fetch(url + "?" + new URLSearchParams(comment), { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                props.fetchComment(props.postId);
                alert(`hello ${data.name} your comment has been saved successfully!`);
                setComment({ name: "", email: "", message: "", website: "", url: props.postId, save_checked: false })
            });
    }
    return (
        <div className="leave-comment-wrapper">
            <h3 className='pb-2'>Leave Comment</h3>
            <form onSubmit={handleForm} className="leave-comment-form pt-3">
                <div className="row mb-4">
                    <div className="col col-12">
                        <textarea name="message" id="message" cols="30" rows="5" value={comment.message} onChange={onChange} placeholder='Your Comment'></textarea>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col col-4 comment-padding">
                        <input type="name" name="name" id="name" onChange={onChange} value={comment.name} placeholder='Name*' />
                    </div>
                    <div className="col col-4 comment-padding">
                        <input type="email" name="email" id="email" onChange={onChange} value={comment.email} placeholder='Email*' />
                    </div>
                    <div className="col col-4 comment-padding">
                        <input type="text" name="website" id="website" onChange={onChange} value={comment.website} placeholder='Website' />
                    </div>
                </div>
                <div className='mb-4'>
                    <input type="checkbox" name="save" id="save" />
                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default LeaveComment