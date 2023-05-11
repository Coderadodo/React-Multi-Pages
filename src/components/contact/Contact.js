import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1 className='vic'><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Type your message here'/>
                        </div>
                        <button className='ede'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact