import React, { useState } from 'react';

const Footer = () => {
   // State to hold form data
      const [formData, setFormData] = useState({
          name: '',
          phone: ''
      });
      
      // const [ setSubmittedData] = useState(null);
  
      // Handle input changes
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value
          });
      };
  
      // Handle form submission
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form Submitted', formData);
          // setSubmittedData(formData); // Set submitted data
      };
  
  return (
    <>
      <div className="container-fluid" style={{ background: "#000" }}>
        <div className="row">
          <div className="col-md-12">
            {/* You can add content here if needed */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="realted-courses">
              <h5 className='text-white'>Trending Courses</h5>
              <ul className='footer-courses'>
                <li>
                  <a target="_blank" href="/cloudcomputingtraining" rel="noopener noreferrer">Full stack </a>
                </li>
                <li><a target="_blank" href="/devopstraining" rel="noopener noreferrer">React Development</a> </li>
                <li><a target="_blank" href="/cyber-security-training-course-in-noida" rel="noopener noreferrer">UI Designer</a></li>
                <li><a target="_blank" href="/javafullstackdeveloper" rel="noopener noreferrer">Frontend Development</a></li>
                <li><a target="_blank" href="/dot-net-core" rel="noopener noreferrer">Backend Development</a></li>
                <li><a target="_blank" href="/cyber-security-training-course-in-noida" rel="noopener noreferrer">JAVA</a></li>
                <li><a target="_blank" href="/javafullstackdeveloper" rel="noopener noreferrer">PHP</a></li>
                <li><a target="_blank" href="/dot-net-core" rel="noopener noreferrer">MERN</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="realted-courses">
              <h5 className='text-white'>Usefull Links</h5>
              <ul className='footer-courses'>
                <li>
                  <a target="_blank" href="/javafullstackdeveloper" rel="noopener noreferrer">Blog</a>
                </li>
                <li>
                  <a target="_blank" href="/merntraining" rel="noopener noreferrer">About Us</a>
                </li>
                <li>
                  <a target="_blank" href="/pythonanddjangotraining" rel="noopener noreferrer">Contact Us</a>
                </li>
                <li>
                  <a target="_blank" href="/ui-ux-design-course" rel="noopener noreferrer">Gallery</a>
                </li>
                <li>
                  <a target="_blank" href="/business-analytics" rel="noopener noreferrer">Carrer Guidance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="realted-courses">
              <h5 className='text-white'>Resources</h5>
              <ul className='footer-courses'>
                <li>
                  <a target="_blank" href="/datascienceusingpython" rel="noopener noreferrer">Student Record</a>
                </li>
                <li><a target="_blank" href="/data-analytics-training-in-delhi" rel="noopener noreferrer">Verify Certificate</a></li>
                <li><a target="_blank" href="/generative-ai" rel="noopener noreferrer">Make Payment</a></li>
                <li><a target="_blank" href="/pythonwithmachinelearning" rel="noopener noreferrer">Generate slip</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 bg-light border ">
            <div className='realted-courses'>
              <h5 className='text-dark'>Request a call</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field1 col-sm-12">
                <label className="w-100 mb-2 text-dark"> Your Name
                  <input
                    className="w-100"
                    type="text"
                    name="name"
                    value={formData.name} // Control the input value with state
                    onChange={handleChange}
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your Full name')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </label>

                <label className="w-100 mb-2 text-dark"> Phone Number
                  <input
                    className="w-100"
                    type="tel"
                    name="phone"
                    value={formData.phone} // Control the input value with state
                    onChange={handleChange}
                    required
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your phone number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </label>
              </div>

              <div className="field mb-2">
                <button
                  className="mx-3 btn text-dark font-weight-bold"
                  type="submit" // Use type="submit" for buttons in forms
                  style={{ background: "#ffc107" }}
                >
                  Submit
                </button>
              </div>

              
            </form>
          </div>

          {/* ... Rest of your footer content ... */}
          <div className="col-lg-6">
            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
              <ul className="footer_nav ">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
              <ul>
                <li><a href="#"><i className="fa fa-facebook text-primary" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter text-primary" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-instagram text-danger" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-whatsapp text-success" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_nav_container">
              <div className="cr text-white">Copyright © 1999 - 2024 Webtech Education Limited, Bulandshahr <i className="fa fa-heart-o" aria-hidden="true" />  <a href="https://themewagon.com">mushahidkhanm614@gmail.com</a></div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;