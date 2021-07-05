import React, { useState } from 'react';
import "./Contact.css";
import contact from './Photos/me.JPG';

const Contact = () => {
    const [note,setnote]=useState({
        fullname:'',
        email:'',
        message:'',
        condition:'',
    })
    const setvalues=(event)=>{
// console.log(event.target.value)
// console.log(event.target.name)
const value=event.target.value;
const name=event.target.name;
setnote((oldvalue)=>{
    if(name==='fullname'){
        return{
            fullname:value,
            email:oldvalue.email,
            message:oldvalue.message,
            condition:oldvalue.condition,
        }
    }else if(name==='email'){
        return{
            fullname:oldvalue.fullname,
            email:value,
            message:oldvalue.message,
            condition:oldvalue.condition,
        }
    }else if(name==='message'){
        return{
            fullname:oldvalue.fullname,
            email:oldvalue.email,
            message:value,
            condition:oldvalue.condition,
        }
    }else if(name==='condition'){
        return{
            fullname:oldvalue.fullname,
            email:oldvalue.email,
            message:oldvalue.message,
            condition:value,
        }
    }
})
    }
    const onsubmit=(event)=>{
        event.preventDefault();
        alert('Form Submitted')
        console.log(note);
    }
    return (
        <>
        <div className='Copage'>
            <div className='Comain'>
                <div className='Codivphoto'>

                <div className='Cophot'>
                    <img src={contact} alt='contact' className='Cophoto1'/>

                </div>
                </div>
                <div className='Coform'>
                    <form className='form' onSubmit={onsubmit}>

                    <h1 className='Coh1'>CONTACT FORM</h1>
                    <input type='text' className='Coinput' placeholder='Enter your full name'
                    name='fullname' onChange={setvalues} value={note.fullname}/>
                    <input type='email' name='email' className='Coinput' placeholder='Enter your E-mail here'
                    name='email' onChange={setvalues} value={note.email}/>
                    <textarea className='textarea' rows='10' cols='35' placeholder='Enter your message here'
                    name='message' onChange={setvalues} value={note.message}/> 
                    <p className='Cop'><input onChange={setvalues} value={note.condition} type='checkbox' className='checkbox' name='condition'/> &nbsp;I accept the <span className='Cospan'>Terms of Services</span></p> 
                    <button className='Cobutton' type='submit'>Submit</button>
                    </form>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Contact;
