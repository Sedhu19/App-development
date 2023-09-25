import React from 'react'
import "../asserts/css/footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='foot'>
        <div className='fadmin'>
            <Link to="/privacy" className=''>PRIVACY POLICY</Link>
            <Link to="/terms" className=''>TERMS AND CONDITION</Link>
            <Link to="/Adminlogin" className="" >ADMIN</Link>
            <Link to="/faq" className="" >FAQ</Link>
        </div>
    </div>
  )
}