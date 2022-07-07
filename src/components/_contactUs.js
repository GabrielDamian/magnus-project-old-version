import React,{useState,useEffect,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export default function ContactUs()
{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [content,setContent] = useState('');

    const [eroare, setEroare] = useState('');
    const [succes, setSucces] = useState('');

    const handleUpdate = (event)=>{
        switch(event.target.name)
        {
            case 'name':
                return setName(event.target.value);

            case 'email':
                return setEmail(event.target.value);
                
            case 'content':
                return setContent(event.target.value);
        }
    }
    const dateGenerator = ()=>{
        let date  = new Date();
        let ceva = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        return ceva;
    }
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2dqo4st', 'template_s21ul4v', form.current, '1tLfezjxHi-ZUipNB')
        .then((result) => {
            setSucces('Tank you for your email!')
            setName('')
            setEmail('')
            setContent('')
        }, (error) => {
            setEroare('Failed to send email. Please try again.')
        });
    };
  
    const form = useRef();
    return (
        <>
        <div className='contact-us-container'>
            <div className='left-contact-container'>
                <div className='left-contact-center'>
                    <div className='left-contact-field'>
                        <div className='left-contact-field-title'>
                            <span>_name:</span>
                        </div>
                        <div className='left-contact-field-input'>
                            <input name='name' onChange={handleUpdate} value={name}></input>
                        </div>
                    </div>
                    <div className='left-contact-field'>
                        <div className='left-contact-field-title'>
                            <span>_email:</span>
                        </div>
                        <div className='left-contact-field-input'>
                            <input name='email' onChange={handleUpdate} value={email}></input>
                        </div>
                    </div>
                    <div className='left-contact-field' style={{height: '150px'}}>
                        <div className='left-contact-field-title' style={{height:'30%'}}>
                            <span>_message:</span>
                        </div>
                        <div className='left-contact-field-input' style={{height:'70%'}}>
                            <textarea name='content' onChange={handleUpdate} value={content}></textarea>
                        </div>
                    </div>
                    <div className='left-contact-field' style={{height: '50px',marginTop:'20px'}}>
                        <form ref={form} onSubmit={sendEmail} novalidate>
                            <label style={{display:'none'}}>Name</label>
                            <input style={{display:'none'}} type="text" name="user_name" value={name}/>
                            <label style={{display:'none'}}>Email</label>
                            <input style={{display:'none'}}  name="user_email" value={email} type="hidden"/>
                            <label style={{display:'none'}}>Message</label>
                            <textarea style={{display:'none'}} name="message" value={content}/>
                            <input  className='left-contact-field-btn' style={{display:'inline'}} type="submit" value="Send" />
                        </form>
                        <span style={{color:'red', width:'100%'}}>{eroare}</span>
                        <span style={{color:'green'}}>{succes}</span>
                    </div>
                </div>
            </div>
            <div className='right-contact-container'>
                <div className='right-contact-center'>
                    <p><span className='color-0'>0</span>&emsp;&emsp;<span className='color-1'>const</span>&emsp;<span className="color-2">button</span>&emsp;<span className='color-1'>=</span>&emsp;<span className='color-2'>document</span><span className='color-3'>.</span><span className='color-2'>querySelector</span><span className='color-3'>(</span><span className='color-4'>'#sendBtn'</span><span className='color-3'>);</span></p>
                    <p><span className='color-0'>1</span>&emsp;&emsp;</p>
                    <p><span className='color-0'>2</span>&nbsp;&emsp;&emsp;<span className='color-1'>const&emsp;</span><span className='color-2'>message&emsp;</span><span className='color-1'>=&emsp;</span><span className='color-3'>&#123;</span></p>
                    <p><span className='color-0'>3</span>&nbsp;&nbsp;&nbsp;&emsp;&emsp;<span className='color-2'>name</span><span className='color-3'>:&emsp;</span><span className='color-4'>"{name} "</span><span className='color-3'>,</span></p>
                    <p><span className='color-0'>4</span>&nbsp;&nbsp;&nbsp;&emsp;&emsp;<span className='color-2'>email</span><span className='color-3'>:&emsp;</span><span className='color-4'>"{email} "</span><span className='color-3'>,</span></p>
                    <p><span className='color-0'>5</span>&nbsp;&nbsp;&nbsp;&emsp;&emsp;<span className='color-2'>message</span><span className='color-3'>:&emsp;</span><span className='color-4'>"{content} "</span><span className='color-3'>,</span></p>
                    <p><span className='color-0'>6</span>&nbsp;&nbsp;&nbsp;&emsp;&emsp;<span className='color-2'>date</span><span className='color-3'>:&emsp;</span><span className='color-4'>"{dateGenerator()}"</span><span className='color-3'>,</span></p>
                    <p><span className='color-0'>7</span>&nbsp;&emsp;&emsp;<span className='color-3'>&#125;;</span></p>
                    <p><span className='color-0'>8</span>&emsp;&emsp;</p>
                    <p><span className='color-0'>9</span>&emsp;&emsp;<span className='color-2'>button</span><span className='color-3'>.</span><span className='color-2'>addEventListener</span><span className='color-3'>(</span><span className='color-4'>'click'</span><span className='color-3'>, () </span><span className='color-1'>=></span><span className='color-3'>&#123;</span></p>
                    <p><span className='color-0'>10</span>&nbsp;&nbsp;&emsp;&emsp;<span className='color-2'>form</span><span className='color-3'>.</span><span className='color-2'>send</span><span className='color-3'>(</span><span className='color-2'>mesage</span><span className='color-3'>);</span></p>
                    <p><span className='color-0'>11</span>&emsp;&emsp;<span className='color-3'>&#125;)</span></p>
                </div>
            </div>
        </div>
        </>
        
    )
}