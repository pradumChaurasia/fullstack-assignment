import React from 'react'
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Abstract</h3>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <div className="footer-contact">
            <p>Contact Us</p>
            <p>info@abstract.com</p>
          </div>
        </div>
      <div className="footer-column">
        <div className="footer-logo">
        <img src="/logo.PNG" alt="logo"/>
        </div>
        <div className="footer-copyright">
          <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer