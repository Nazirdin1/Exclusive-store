import React from "react";
import { VscSend } from "react-icons/vsc";
import QrCode from "../../assets/QrCode.png";
import play from "../../assets/play.png";
import appStore from "../../assets/appstore.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa6";
import { Container } from "@mui/material";
const Footer = () => {
  return (
    <div className="w-100% bg-black p-12 mt-20">
      <Container maxWidth="lg" sx={{p:"0px"}}>
      <div className="flex items-start  justify-around">
        <div className="">
          <h3 className="text-white text-2xl">Exclusive</h3>
          <h4 className="text-white text-xl mt-4">Subscribe</h4>
          <p className="text-white mt-4">Get 10% off your first order</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-white  bg-black border-x-2 border-y-2 p-2  "
            />

            <button
              className="p-2 rounded-r  focus:outline-none"
              style={{
                marginLeft: "-40px",
              }}
            >
              <VscSend className="text-gray-600" style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
        <div className="">
          <h4 className=" text-white text-2xl ">Support</h4>
          <p className="text-white mt-4">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-white mt-1">exclusive@gmail.com</p>
          <p className="text-white mt-1">+88015-88888-9999</p>
        </div>
        <div className="footer-account">
          <h4 className=" text-white text-2xl ">Account</h4>
          <a className="text-white block mt-4"> My Account</a>
          <a className="text-white block"> Login / Register</a>
          <a className="text-white block"> Cart</a>
          <a className="text-white block">Wishlist</a>
          <a className="text-white block"> Shop</a>
        </div>
        <div className="footer-quick">
          <h4 className="text-white text-2xl">Quick Link</h4>
          <a href="" className="text-white block mt-4">
            Privacy Policy
          </a>
          <a href="" className="text-white block">
            Terms Of Use
          </a>
          <a href="" className="text-white block">
            FAQ
          </a>
          <a href="" className="text-white block">
            Contact
          </a>
        </div>
        <div className="">
          <h4 className="text-white text-2xl">Download App</h4>
          <p className="text-white mt-4">Save $3 with App New User Only</p>
          <div className="flex mt-2 ">
            <img src={QrCode} alt="" />
            <div className=" ml-5 ">
              <button
                onClick={() =>
                  (window.location.href = "https://play.google.com/store")
                }
                className="block"
              >
                <img src={play} alt="Play Store" />
              </button>
              <button
                onClick={() =>
                  (window.location.href = "https://www.apple.com/app-store/")
                }
                className="block mt-4"
              >
                <img src={appStore} alt="App Store" />
              </button>
            </div>
          </div>
          <div className="flex text-2xl text-white mt-4  justify-between w-40">
            <FaFacebookF />
            <FiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <hr className="mt-20" />
      <p className="text-white text-center mt-4">
        Copyright Rimel 2022. All right reserved
      </p>
      </Container>
    </div>
  );
};

export default Footer;
