import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="super_container">
        {/* Slider */}
        <div
          className="main_slider"
          style={{
            backgroundImage: 'url(https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_05_software-development-i1.jpg)',  // Use a better resolution image if available
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover', // Make sure the image covers the entire area
            backgroundPosition: 'center', // Center the background image
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content">
                  <h3 className='text-white'>Winter / Summer Internship Programme in 2025</h3>
                  <h4 className='text-white font-weight-bolds mt-5'>Get up to 50% Courses Fees</h4>
                  <div className="red_button shop_now_button bg-warning ">
                    <Link to="/ragistration" className='text-dark font-weight-bold'>Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 mb-5">
          {/* <!-- First Row [Prosucts]--> */}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-white">
            <h3 className="font-weight-bold text-center section">Our Best Courses on Websites and <span className='text-warning'>Software Development</span></h3>
            <hr className='bg-dark' />
          </div>

          <div className="best_learners">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="section_title new_arrivals_title">
                    <h4>Our Best Courses on Websites and Software Developmen </h4>
                  </div>
                </div>
              </div>
              <div className="row  shadow-lg">
                <div className="col text-center">
                  <div className="product_slider_container ">
                    <div className="owl-carousel owl-theme product_slider ">
                      {/* Slide 1 */}
                      <div className="owl-item product_slider_item ">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/userinterface.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />

                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> UI DESIGNER</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 6 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:3 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>

                        </div>
                      </div>
                      {/* Slide 2 */}
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/react1.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> React development</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 6 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:3 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      {/* Slide 3 */}
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/software.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> Software development</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 1 Year)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:6 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/webdevelopment.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> Web development</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 6 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:3 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/java1.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> Java development Course</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration:  9 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:6 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/C++.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark">C and C++ Courses</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration:  9 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:6 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/excel.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark"> Advance excel Course</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 6 months)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:3 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>
                      <div className="owl-item product_slider_item">
                        <div className="product-item mb-5">
                          <div className="product">
                            <div className="product_image d-flex justify-content-center align-items-center p-3">
                              <img
                                src="images/graphic.png"
                                alt="Company Logo"
                                className="img-fluid rounded"
                                style={{ maxHeight: "100", width: "100", objectFit: "contain" }}
                              />
                            </div>
                            <div className='text-center'></div>
                            <h6 className="text-dark">Graphic designing Courses</h6>
                            <p className="text-dark">Regular Track</p>
                            <p className="small text-muted font-italic">(Duration: 1 Year)</p>
                            <span>Fast Track:</span>
                            <span className='small text-muted'>(Duration:6 months)</span>
                            <div class="mb-1"><button class="btn btn-primary mt-2">Submit</button></div>
                          </div>
                        </div></div>








                    </div>
                    {/* Slider Navigation */}
                    <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column" style={{ background: "#1576ca", borderColor: "#000", marginLeft: "-16px" }}>
                      <i className=" text-light fa fa-chevron-left" aria-hidden="true" />
                    </div>
                    <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column" style={{ background: "#1576ca", borderColor: "#000", marginRight: "-16px" }}>
                      <i className=" text-light fa fa-chevron-right" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>








          {/* module card start */}
          <div className='container'>
            <section className='mt-3'>
              <h3 className='text-success font-weight-bold'>Course Modules - Web Design Courses in Delhi</h3>
            </section>

            {/* <!-- First Row [Statistics]--> */}
            <div className="row pb-2 mt-5" data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                    <h5>Module1</h5>
                    <p className="large font-italic text-danger">Designing User Interface of a Webpage.</p>

                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card --> */}
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-tasks fa-2x mb-3 text-success"></i>
                    <h5>Module2</h5>
                    <p className="large font-italic text-danger">core UI & Web Functionality using various Technologies.</p>

                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card --> */}
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
                    <h5>Module3</h5>
                    <p className="large font-italic text-danger">HTML5,  CSS3 , JavaScript, Bootstrap , JQuery and React js.</p>

                  </div>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 mt-3">
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                    <h5>Module4</h5>
                    <p className="large font-italic text-danger">Node Js ,Express js, Mongo database Mysql database & Content management system</p>

                  </div>
                </div>
              </div>
              {/* <!-- Card --> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 mt-3">
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                    <h5>Module5</h5>
                    <p className="large font-italic text-danger">React(Framework) and Various Application</p>

                  </div>
                </div>
              </div>
              {/* <!-- Card --> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 mt-3">
                <div className="module_card rounded shadow-lg border-1">
                  <div className="card-body p-5"><i className="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                    <h5>Module6</h5>
                    <p className="large font-italic text-danger">Core Java <span>Desktop Based Application</span></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>


        {/* Deal of the week */}
        <div className="deal_ofthe_week">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="deal_ofthe_week_img">
                  <img src="images/deal_ofthe_week.png" alt />
                </div>
              </div>
              <div className="col-lg-6 text-right deal_ofthe_week_col">
                <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                  <div className="section_title">
                    <h2>Seat Of The Week</h2>
                  </div>
                  <ul className="timer">
                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                      <div id="day" className="timer_num">03</div>
                      <div className="timer_unit">Day</div>
                    </li>
                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                      <div id="hour" className="timer_num">15</div>
                      <div className="timer_unit">Hours</div>
                    </li>
                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                      <div id="minute" className="timer_num">45</div>
                      <div className="timer_unit">Mins</div>
                    </li>
                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                      <div id="second" className="timer_num">23</div>
                      <div className="timer_unit">Sec</div>
                    </li>
                  </ul>
                  <div className="red_button deal_ofthe_week_button"><Link to="/ragistration">Book Now</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* project covered start  */}
        <div className="features-section mt-5" style={{ paddingBottom: "0", background: "aliceblue" }}>
          <div className="container features-container">
            <div id="Projects"></div>
            <div className="col-lg-12 col-md-12 features-content-section2">
              <div className="col-md-12 title-section features-title-section">
                <h3 align="center" className="title font-weight-bold text-success p-2" style={{ fontWeight: "600" }}>
                  Projects Covered
                </h3>
              </div>

              <div className="container-fluid">
                <div className="row mt-3">
                  <div className="col-md-12 features-card2">
                    <div className="features-card-content-section p-2 text-dark shadow-lg">
                      <div className="row">
                        <ul className="col-lg-6 col-md-12">
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Landing Page
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Website
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>HTML
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Education Institute Website
                          </li>
                        </ul>
                        <ul className="col-lg-6 col-sm-12">
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Page
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Portfolio Page
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Documentation Page
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>A Conference Page for a Workshop
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="features-card-content-section p-3 mt-4 text-dark shadow-lg">
                      <div className="row">
                        <ul className="col-lg-6 col-sm-12">
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Build A JavaScript Map
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Clock
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>JavaScript Tip Calculator
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Build A JavaScript Map
                          </li>
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Mouseover Element
                          </li>
                        </ul>
                        <ul className="col-lg-6 col-sm-12">
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Build A JavaScript Quiz
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>JavaScript To-Do List
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Login Authentication
                          </li>
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Sliding JavaScript Drawers
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="features-card-content-section p-3 mt-4 text-dark shadow-lg">
                      <div className="row">
                        <ul className="col-lg-6 col-sm-12">
                          <li className="h6 mt-3 c-color">
                            <i className="bi bi-check2-square mx-3"></i>Creating a Personal Blog with React Js
                          </li>
                        </ul>
                        <ul className="col-lg-6 col-sm-12">
                          <li className="h6 mt-3">
                            <i className="bi bi-check2-square mx-3"></i>Creating a Personal Portfolio with React Node Js
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <section style={{ background: "#FFFFFF" }}>
          <div className="container-fluid" style={{ marginTop: "5rem" }}>
            <div className="row">
              <div className="col-sm-6 banner-content-section d-flex align-items-center justify-content-center order-2 order-md-1 p-3">
                <div>
                  <h6 className="text-center banner-heading-blue h1">Inside Our Institute</h6>
                  <h6 className="text-center h1 mb-4 banner-heading-black">Moments at Webtech</h6>
                  <div className="content text-center">
                    <p className="text-white">Explore our gallery and experience the vibrant life of our institute</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 banner-image order-1 order-md-2 ps-md-2 pe-md-2 p-0">
                <img
                  src="https://www.oxfordinstitute.in/img/gallery-banner-1.jpg"
                  alt="Oxford institute gallery"
                  title="Oxford institute gallery"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>


          <div className="blogs">
            <div className="container-fluid">
              <div className="row">
                <div className="col text-center">
                  <div className="section_title new_arrivals_title">
                    <h2>Our Learners Work At</h2>
                  </div>
                  <p className='mt-5'>Webtech learners work at some of the leading and innovative organizations of today, solving core business problems.</p>
                </div>
              </div>
              <div className="row blogs_container">
                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/infosys.png" alt="" />
                  </div>

                </div>
                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/accenture.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/aditya_birla.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/bajaj.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/Birlasoft.png" alt="" />
                  </div>
                </div>

                <div className="col-lg-2 blog_item_col">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/cognigent.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/ibm.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/tcs.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/Tech-Mahindra.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/wipri.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/infosys.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 blog_item_col mt-5">
                  <div className='images'>
                    <img className='w-100' height={100} src="sliderimg/genpact.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!---row end--> */}


        {/* project covered end  */}


        {/* key heighlight start */}
        <section className="key-highlight">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="key-head">
                  <h2>Key Highlights</h2>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border border m-3">
                {/* <!-- Card--> */}

                <div className="key-1">
                  <div className="key-images ">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/money.svg" alt="Job Assistance" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/money.svg" />
                  </div>
                  <div className="key-text">
                    <h3>100% Job Assistance</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/thinking.svg" alt="Practical Training" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/thinking.svg" />
                  </div>
                  <div className="key-text">
                    <h3>80% Practical Training</h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/cetificate.svg" alt="Global Certifications" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/cetificate.svg" />
                  </div>
                  <div className="key-text">
                    <h3>2 Global Certifications</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/advisor.svg" alt="Weekday Weekend Batches" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/advisor.svg" />
                  </div>
                  <div className="key-text">
                    <h3>Weekday Weekend Batches</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/opportunity.svg" alt="Personalized Career Coach" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/opportunity.svg" />
                  </div>
                  <div className="key-text">
                    <h3>Personalized Career Coach</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/doubt.svg" alt="Instant Doubt Solving" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/doubt.svg" />
                  </div>
                  <div className="key-text">
                    <h3>Instant Doubt Solving</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/no-cost.svg" alt="No Cost EMI option" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/no-cost.svg" />
                  </div>
                  <div className="key-text">
                    <h3>No Cost EMI option</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/education-app.svg" alt="Study App/Material" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/education-app.svg" />
                  </div>
                  <div className="key-text">
                    <h3>Study App/Material</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/student.svg" alt="Case studies" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/student.svg" />
                  </div>
                  <div className="key-text">
                    <h3>30+ Case studies &amp; Projects</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 border  m-3">
                {/* <!-- Card--> */}
                <div className="key-1">
                  <div className="key-images">
                    <img loading="lazy" data-src="https://www.itvedant.com/images/course/study-area.svg" alt="Profile Building Session" className="img-fluid lazyloaded" src="https://www.itvedant.com/images/course/study-area.svg" />
                  </div>
                  <div className="key-text">
                    <h3>Profile Building Session</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
        {/* key heighlight close  */}



        {/* Best Sellers */}
        {/* <div className="best_sellers">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="section_title new_arrivals_title">
            <h2>Best Sellers</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="product_slider_container">
            <div className="owl-carousel owl-theme product_slider"> */}
        {/* Slide 1 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item">
                  <div className="product discount">
                    <div className="product_image">
                      <img src="images/product_1.png" alt />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 2 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item women">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_2.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 3 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item women">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_3.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 4 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item accessories">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_4.png" alt />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 5 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item women men">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_5.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold &amp; Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 6 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item accessories">
                  <div className="product discount">
                    <div className="product_image">
                      <img src="images/product_6.png" alt />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 7 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item women">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_7.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 8 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item accessories">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_8.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 9 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item men">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_9.png" alt />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                </div>
              </div> */}
        {/* Slide 10 */}
        {/* <div className="owl-item product_slider_item">
                <div className="product-item men">
                  <div className="product">
                    <div className="product_image">
                      <img src="images/product_10.png" alt />
                    </div>
                    <div className="favorite" />
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold &amp; Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        {/* Slider Navigation */}
        {/* <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </div>
            <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
        {/* Benefit */}
        {/* <div className="benefit">
    <div className="container">
      <div className="row benefit_row">
        <div className="col-lg-3 benefit_col">
          <div className="benefit_item d-flex flex-row align-items-center">
            <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true" /></div>
            <div className="benefit_content">
              <h6>free shipping</h6>
              <p>Suffered Alteration in Some Form</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 benefit_col">
          <div className="benefit_item d-flex flex-row align-items-center">
            <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true" /></div>
            <div className="benefit_content">
              <h6>cach on delivery</h6>
              <p>The Internet Tend To Repeat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 benefit_col">
          <div className="benefit_item d-flex flex-row align-items-center">
            <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true" /></div>
            <div className="benefit_content">
              <h6>45 days return</h6>
              <p>Making it Look Like Readable</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 benefit_col">
          <div className="benefit_item d-flex flex-row align-items-center">
            <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true" /></div>
            <div className="benefit_content">
              <h6>opening all week</h6>
              <p>8AM - 09PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
        {/* Gallery */}
        <div className="blogs">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title">
                  <h2>Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row blogs_container">
              <div className="col-lg-4 blog_item_col">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://lh4.googleusercontent.com/proxy/26JDh8MoAP2BdV-_bCq4tvYyEbbl_s9qn-i1KTKs2d4wV5PX1yhOGw6Zc-QZMp_U_39vIlJleC4vDaHGFA)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
              <div className="col-lg-4 blog_item_col">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://content3.jdmagicbox.com/comp/lucknow/x3/0522px522.x522.190110202756.d1x3/catalogue/s-tech-computer-coaching-centre-indira-nagar-lucknow-lucknow-computer-training-institutes-wslwbxnvzn.jpg)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
              <div className="col-lg-4 blog_item_col">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://content.jdmagicbox.com/comp/def_content_category/computer-training-institutes-aptech/360-f-810303281-ff6uglv5qnlzk4zhjekmn1gthovq4aib-computer-training-institutes-aptech-1-aozj2.jpg)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
              <div className="col-lg-4 blog_item_col mt-5">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://st.depositphotos.com/1075946/1820/i/450/depositphotos_18206843-Group-of-young-in-training-course.jpg)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
              <div className="col-lg-4 blog_item_col mt-5">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://www.jvbi.ac.in/images/facilities/03computer-center/img2.jpg)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
              <div className="col-lg-4 blog_item_col mt-5">
                <div className="blog_item">
                  <div className="blog_background" style={{ backgroundImage: 'url(https://www.oxfordinstitute.in/img/gallery-7.jpg)' }} />
                  {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







    </>
  )
}

export default Home
