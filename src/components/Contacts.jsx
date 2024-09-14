import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <>
      <div
        className="my-2 col-6 col-sm-6 col-md-4 col-lg-3 container contact"
        id="contact"
      >
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com"
            rel="noreferrer"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkinedin.com"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/AnasShaikh5335/Hospital-Management-System"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailTo:anassashaikh404@gmail.com"
            rel="noreferrer"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
