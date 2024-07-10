import React from 'react'
import Img1 from "../assets/Side Image.png.png"
import { Container, Icon } from '@mui/material'
import IconShop from "../assets/iconshop.svg"
import Money from "../assets/money.svg"
import MoneyBag from "../assets/moneyBag.svg"
import Bag from "../assets/money1.svg"


const About = () => {
  return (
    <div>
      <Container style={{ display: "flex", gap: "75px" }}>
        <div style={{
          width: "525px",
          height: "336px",
          display: "grid",
          gap: "50px",
          marginTop: "280px"
        }}>
          <h2 style={{ fontSize: "54px", fontWeight: "600" }}>Our Story</h2>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div style={{
          width: "847px",
          height: "609px",
          marginTop: "143px"
        }}><img src={Img1} alt="" style={{ borderRadius: "4px 0px 0px 4px", marginLeft: "183px" }} /></div>
      </Container>
      <Container style={{ paddingTop: "140px" }}>
        <div style={{ display: "flex", gap: "30px" }}>
          <div className='block active' style={{
            width: 270,
            height: 230,
            borderRadius: "4px",
            border: "1px solid #0000004D",
            padding: "30px 45px 30px 35px",

          }}>
            <div style={{
              width: 200,
              height: 170,
              textAlign: "center",
              display: "grid",
              gap: "10px",
              justifyContent: "center",
            }}>
              <img src={IconShop} style={{ margin: "0px 45px 0px 55px" }} alt="" />
              <h4 style={{ fontSize: "32px", fontWeight: "700" }}>10.5k</h4>
              <p>Sallers active our site</p>
            </div>
          </div>
          <div className='block' style={{
            width: 270,
            height: 230,
            borderRadius: "4px",
            border: "1px solid #0000004D",
            padding: "30px 45px 30px 35px",

          }}>
            <div style={{
              width: 200,
              height: 170,
              textAlign: "center",
              display: "grid",
              gap: "10px",
              justifyContent: "center",
            }}>
              <img src={Money} style={{ margin: "0px 45px 0px 55px", border: "1px solid black", borderRadius: "50%" }} alt="" />
              <h4 style={{ fontSize: "32px", fontWeight: "700" }}>33k</h4>
              <p>Mopnthly Produduct Sale</p>
            </div>
          </div>
          <div className='block' style={{
            width: 270,
            height: 230,
            borderRadius: "4px",
            border: "1px solid #0000004D",
            padding: "30px 45px 30px 0px",
          }}>
            <div style={{
              width: 270,
              height: 170,
              textAlign: "center",
              display: "grid",
              gap: "10px",
              justifyContent: "center"
            }}>
              <img src={MoneyBag} style={{ margin: "0px 44px 0px 65px" }} alt="" />
              <h4 style={{ fontSize: "32px", fontWeight: "700" }}>45.5k</h4>
              <p>Customer active in our site</p>
            </div>
          </div>
          <div className='block' style={{
            width: 270,
            height: 230,
            borderRadius: "4px",
            border: "1px solid #0000004D",
            padding: "30px 29px 30px 28px",
          }}>
            <div style={{
              width: 215,
              height: 170,
              textAlign: "center",
              display: "grid",
              gap: "10px",
              justifyContent: "center"
            }}>
              <img src={Bag} style={{ margin: "0px 44px 0px 60px" }} alt="" />
              <h4 style={{ fontSize: "32px", fontWeight: "700" }}>25k</h4>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
