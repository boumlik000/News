import React from 'react';
import "../styles/footer.scss";
import {FaFacebookF,FaGithub,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

function FOOTER() {
    return (
      <>
       <h1>footer</h1>
       <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">logo</h5>
                    <p className="small text-muted description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small text-muted mb-0 copyright">&copy; Copyrights. All rights reserved. <a className="text-primary" href="/">Mohamed boumlik</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">categories</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Get started</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Social media</h5>
                    <ul className="list-unstyled text-muted">
                        <li className='d-inline'><a href="/"><FaFacebookF /></a></li>
                        <li className='d-inline'><a href="/"><FaTwitter /></a></li>
                        <li className='d-inline'><a href="/"><FaLinkedinIn /></a></li>
                        <li className='d-inline'><a href="/"><FaGithub /></a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Contact Us</h5>
                    <p className="small text-muted">aaaa@gmail.com</p>
                </div>
            </div>
        </div>
        </footer>
      </>
 )   
}
  
export default FOOTER;