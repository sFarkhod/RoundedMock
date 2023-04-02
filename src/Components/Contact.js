import React from 'react'
import './Css/Contact.css'

export default function Contact() {
  return (
    <>
        <h1 className='contactH1'>ОСТАВЬТЕ ЗАЯВКУ</h1>
        <div className='Contact'>
            <input type='text' placeholder='Ваше имя:'/>
            <input type='text' style={{width:"265px"}} placeholder='+998 --- --- -- --'/>
            <input type='email' placeholder='Email:' style={{width:"267px"}}/>
            <button>Оставить заявку</button>
        </div>
        <hr className='endHr'/>
    </>
  )
}
