import React from 'react'
import { Link } from 'react-router-dom'
const Mongo = () => {
  return (
    <>
              <section className="course-banner" style={{ marginTop: "11rem" }}>
                    <div className="container courseview">
                        <div className="row align-items-center d-flex">
                            <div className="col-md-12" />
                            <div className="col-md-8">
                                <div className="breadcrumbs">
                                    <p><Link to="home">Home /</Link>
                                        <a href>Java</a>
                                    </p>
                                </div>
    
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='category-mobile-image img'>
                                                <img width={250} height={150} src="images/mysql.png" alt="Java" className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <h5>MongoDb</h5>
                                            <div className="sub-heading ">
                                                <p>Join the program and get the opportunity to learn under the guidance of an Mongodb Analyst.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                                <div className="course-banner-sections-left">
                                    <div className="course-ratings mt-2">
                                        <div className="course-ratings-stars">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-half" aria-hidden="true" />
                                            <span className='mx-3'>4.75 out of 5 </span>
                                        </div>
                                    </div>
                                   <p>MongoDB is a document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. Founded in 2007, MongoDB has a worldwide following in the developer community.

Instead of storing data in tables of rows or columns like SQL databases, each record in a MongoDB database is a document described in BSON, a binary representation of the data. Applications can then retrieve this information in a JSON format.</p>
                                </div>
                            </div>
                            <div className="col-md-4 bg-light shadow-lg course-right p-3">
                                <div className="sticky-form course-right-form">
                                    <div className="form h-100">
                                        <p className="now text-center">Enquire Now</p>
                                        <form className="custom_contact home_custom cour_2" method="post" id="contactForm" name="contactForm">
                                            <div className="row">
                                                <div className="col-md-12 form-group ">
                                                    <input className="form-control" placeholder="Full Name" type="text" name="name" />
                                                </div><div className="col-md-12 form-group ">
                                                    <input className="form-control" placeholder="Email Address" type="email" name="email" />
                                                </div><div className="col-md-12 form-group ">
                                                    <input className="form-control" placeholder="Phone Number" type="text" name="phone" />
                                                </div>
                                                <div className="col-md-12 mb-3 ">
                                                    <select name="course" className="form-control">
                                                        <option>Select a Course</option>
                                                        <option>UI Designer</option>
                                                        <option>React Development</option>
                                                        <option>Java </option>
                                                        <option>Full stack Development</option>
                                                        <option>MERN</option>
                                                        <option>Frontend Development</option>
                                                        <option>Backend Development</option>
                                                        <option>PHP</option>
                                                        <option>MySQL</option>
                                                        <option>MongoDb</option>
                                                        <option>C Programming</option>
                                                        <option>Advanced Excel</option>
                                                        <option>C++</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 mb-3 ">
                                                    <select name="course" className="form-control">
                                                        <option>Select a Branch</option>
                                                        <option>Bulandshahr</option>
                                                        <option>Delhi</option>
                                                        <option>Noida </option>
                                                    </select>
                                                </div>
    
                                                <div className="col-md-12 form-group">
                                                    <input className="btn btn-dark submit_bt  py-2 px-3" type="submit" defaultValue="Submit " />
                                                    <span className="submitting" />
                                                </div>
                                            </div>
                                        </form>
                                        <div id="form-message-warning mt-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>   
              
    </>
  )
}

export default Mongo
