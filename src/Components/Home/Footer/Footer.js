import React from 'react';
import footerImg from '../../../images/flikr1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <section class="footer1">
        <div class="container">
        <div class="row">
        <div class="col-md-3">
                    <div class="footer-content">
                        <div class="footer-logo">
                            <img src="image/footerlogo.png" alt=""/>
                        </div>
                        <div class="footer-details">
                            <p>Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod apor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, conser adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-content">
                        <div class="footer-heading">
                            <h4>contact us</h4>
                        </div>
                        <div class="footer-contact">
                           <div class="contact-icon">
                           <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
                          </div>   
                    
                           <div class="contact-number">
                               <p>01853750606</p>
                               <p>01891984502</p>
                            </div>
                        
                    </div>
                    <div class="footer-contact">
                        <div class="contact-icon">
                         <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
                       </div>   
                 
                        <div class="contact-number">
                            <p>01853750606</p>
                            <p>01891984502</p>
                         </div>
                     
                 </div>
                 <div class="footer-contact">
                    <div class="contact-icon">
                    <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
                   </div>   
             
                    <div class="contact-number">
                        <p>01853750606</p>
                        <p>01891984502</p>
                     </div>
                 
             </div>
                </div>
            </div>
            <div class="col-md-2">
            <div class="footer-content">
                
                    <div class="footer-heading">
                        <h4>contact us</h4>
                    </div>
                   <div className="d-flex">
                        <div class="leftnavs">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                        </ul>
                    </div>
                    <div class="rightnavs">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOME</a></li>
                        </ul>
                    </div></div>
                
                </div>
            </div>
            <div class="col-md-4">
                <div class="footer-content">
                    <div class="footer-heading">
                        <h4>contact us</h4>
                    </div>
                        <div class="footer-gallery">
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                        </div>
                        <div class="footer-gallery">
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                            <div class="footer-img">
                                <a href="#"><img src={footerImg} alt=""/></a>
                            </div>
                        </div>
                    
    
                </div>
            </div>
    
                
        </div>
    </div>
    
    
    </section>
    );
};

export default Footer;