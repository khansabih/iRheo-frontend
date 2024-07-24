// styles
import './contactFormComponent.css';
// react states
import { useState, useEffect, useRef } from 'react';

export default function ContactFormComponent(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    // To dynamically expand the text area
    const textAreaRef = useRef(null);

    const handleMessageChange = (messageEvent) => {
        setMessage(messageEvent.target.value);
    }

    useEffect(()=>{
        const messageRef = textAreaRef.current;
        if(messageRef){
            messageRef.style.height = 'auto';
            messageRef.style.height = `${messageRef.scrollHeight}px`;
        }
    },[message])

    return(
        <div className="contact-form-container">
            <div className="contact-form-heading-area">
                <p className='contact-form-heading'>Contact Us</p>
                <p className='contact-form-subheading'>Reach out and we will get in touch as soon as possible.</p>
            </div>
            <div className="contact-form-name-div">
                <div className="contact-form-input-div">
                    <input className='contact-form-input' 
                        type="text"
                        placeholder='Enter your first name'
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>
                <div className="contact-form-input-div">
                    <input className='contact-form-input' 
                        type="text"
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="contact-form-contacts-div">
                <div className="contact-form-input-div">
                    <input className='contact-form-input' 
                        type="text"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="contact-form-input-div">
                    <input className='contact-form-input' 
                        type="text"
                        placeholder='Enter your contact number (Optional)'
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                    />
                </div>
            </div>
            <div className="contact-form-message-div">
                <textarea
                    ref={textAreaRef}
                    className="contact-message-area"
                    value={message}
                    onChange={(e)=>handleMessageChange(e)}
                    placeholder="Write your message here..."
                >
                </textarea>
            </div>
            <button className="contact-form-cta">
                Send message
            </button>
        </div>
    )
}