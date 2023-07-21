import React from 'react';
import "../styles/footer.scss";
import {FaFacebookF,FaGithub,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

function FOOTER() {
    return (
      <>
        <div className="container py-4 footer-for-news ">
            <div className="row gy-4 gx-5">
                <div className="col-lg-3 col-md-6">
                    <h3 className="mb-3">logo</h3>
                    <p className="small  description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="mb-3">categories</h3>
                    <ul className="list-unstyled  row">
                        <li className='col-md-12 categories-item'><a href="/">Home</a></li>
                        <li className='col-md-12 categories-item'><a href="/">categories</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className=" mb-3">Social media</h3>
                    <ul className="list-unstyled  social-media">
                        <li className='d-inline social-media-item'><a href="/"><FaFacebookF /></a></li>
                        <li className='d-inline social-media-item'><a href="/"><FaTwitter /></a></li>
                        <li className='d-inline social-media-item'><a href="/"><FaLinkedinIn /></a></li>
                        <li className='d-inline social-media-item'><a href="/"><FaGithub /></a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className=" mb-md-3">Contact Us</h3>
                    <p className="small  description">aaaa@gmail.com</p>
                    <p className="small  mt-0 copyright">&copy; Copyrights. All rights reserved. <a className="" href="/">Mohamed boumlik</a></p>
                </div>
            </div>
        </div>
      </>
 )   
}
  
export default FOOTER;