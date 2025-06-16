import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     {/* Header */}
  <header className="header trans_300">
    {/* Top Navigation */}
    <div className="top_nav">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="top_nav_left">mushahidkhanm614@gmail.com</div>
          </div>
          <div className="col-md-6 text-right">
            <div className="top_nav_right">
              <ul className="top_nav_menu">
                {/* Currency / Language / My Account */}
               
                <li className="account">
                  <a href="#">
                    My Account
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="account_selection">
                    <li><Link to="sign"><i className="fa fa-sign-in" aria-hidden="true" />Sign In</Link></li>
                    <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true" />Register</a></li>
                  </ul>
                </li>
                <li className="account w-">
                  <a href="#">
                    Others
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="account_selection">
                  
                  <li><Link to="contact">Contact</Link></li>
                  <li><Link to="gallery">Gallery</Link></li>
                  <li><Link to="blog">Blog</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Main Navigation */}
    <div className="main_nav_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-right">
            <div className="logo_container">
              <a className='small' href="#"><h6 className='font-weight-bold mt-2'>Webtech<span className='text-danger mx-2'>Institute</span></h6></a>
            </div>
            <nav className="navbar">
              <ul className="navbar_menu">
                <li><Link to="home">home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="courses">Courses</Link></li>
                <li><Link to="ragistration">Online Ragistration</Link></li>
                <li><Link to="carrer">Carrer Guidance</Link></li>
              </ul>
              <ul className="navbar_user">
                <li><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></li>
                <li><Link to="contact"><i className="fa fa-user" aria-hidden="true" /></Link></li>
              </ul>
              <div className="hamburger_container">
                <i className="fa fa-bars" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="fs_menu_overlay" />
  <div className="hamburger_menu">
    <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true" /></div>
    <div className="hamburger_menu_content text-right">
      <ul className="menu_top_nav">
        
       
        <li className="menu_item has-children">
          <a href="#">
            My Account
            <i className="fa fa-angle-down" />
          </a>
          <ul className="menu_selection">
            <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true" />Sign In</a></li>
            <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true" />Register</a></li>
          </ul>
        </li>
        <li className="menu_item has-children">
          <a href="#">
          Others
            <i className="fa fa-angle-down" />
          </a>
          <ul className="menu_selection">
          <li><Link to="contact">Contact</Link></li>
           <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="Blog">Blog</Link></li>
          </ul>
        </li>
        <li className="menu_item"><Link to="/home">home</Link></li>
        <li className="menu_item"><Link to="about">About</Link></li>
        <li className="menu_item"><Link to="courses">Courses</Link></li>
        <li className="menu_item"><Link to="ragistration">Online Ragistration</Link></li>
        <li className="menu_item"><Link to="carrer guidance">Carrer Guidance</Link></li>
      </ul>
    </div>
  </div>

    </>
  )
}

export default Navbar
