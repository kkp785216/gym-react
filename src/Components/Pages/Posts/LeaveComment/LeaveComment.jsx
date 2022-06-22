import React from 'react'
import './LeaveComment.css'

const LeaveComment = () => {
    return (
        <div className="leave-comment-wrapper">
            <h3 className='pb-2'>Leave Comment</h3>
            <form className="leave-comment-form pt-3">
                <div className="row mb-4">
                    <div className="col col-12">
                        <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Comment'></textarea>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col col-4 comment-padding">
                        <input type="name" name="name" id="name" placeholder='Name*' />
                    </div>
                    <div className="col col-4 comment-padding">
                        <input type="email" name="email" id="email" placeholder='Email*' />
                    </div>
                    <div className="col col-4 comment-padding">
                        <input type="text" name="website" id="website" placeholder='Website*' />
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