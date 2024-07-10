import { Container } from '@mui/material'
import React from 'react'
import IconsPhone from "../assets/IconPhone.svg"
import IconsMail from "../assets/icons-mail.svg"

const Contact = () => {
  return (
    <Container style={{ display: "flex", gap: "30px" }}>
      <div style={{
        width: 340,
        height: 457,
        borderRadius: "4px",
        marginTop: "180px",
        padding: "40px 35px 51px 35px",
        display: "grid",
        boxShadow: '0px 1px 13px 0px #0000000D',
        gap: "15px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={IconsPhone} alt="" />
          <p style={{ fontWeight: '500' }}>Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr style={{ border: "1px solid #000" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={IconsMail} alt="" />
          <p style={{ fontWeight: '500' }}>Write To US</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
      <div style={{
        width: 800,
        height: 457,
        borderRadius: "4px",
        marginTop: "180px",
        boxShadow: '0px 1px 13px 0px #0000000D',
        padding: '40px 32px 40px 31px',
      }}>
        <div style={{display:"flex", gap:'16px'}}>
          <input type="text" style={{width:235, height:50, borderRadius:"4px", background:"#F5F5F5", padding:"13px 0px 13px 16px"}} placeholder='Your Name'/>
          <input type="email" style={{width:235, height:50, borderRadius:"4px", background:"#F5F5F5", padding:"13px 0px 13px 16px"}} placeholder='Your Email'/>
          <input type="phone" style={{width:235, height:50, borderRadius:"4px", background:"#F5F5F5", padding:"13px 0px 13px 16px"}} placeholder='Your Phone'/>
        </div>
        <input type="text" style={{
          width:737,
          height:207,
          borderRadius:"4px",
          background:"#F5F5F5",
          marginTop:"32px",
          padding:"13px 0px 170px 16px"
        }} placeholder='Your Massage'/>
        <button style={{
          width:215,
          height:56,
          borderRadius:'4px',
          padding:"16px 48px 16px 48px",
          background:"#DB4444",
          color:"#fff",
          margin:"32px 0px 0px 522px"
        }}>Send Massage</button>
      </div>
    </Container>
  )
}

export default Contact
