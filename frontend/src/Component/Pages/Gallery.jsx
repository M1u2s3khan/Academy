import React from 'react';

const Gallery = () => {
  return (
    <>

  <section style={{background:"#FFFFFF"}}>
  <div className="container-fluid" style={{marginTop:"5rem"}}>
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
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery1.jpg)'}} />
            {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-4 blog_item_col">
          <div className="blog_item">
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery2.jpg)'}} />
            {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-4 blog_item_col">
          <div className="blog_item">
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery3.jpg)'}} />
            {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-4 blog_item_col mt-5">
          <div className="blog_item">
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery4.jpg)'}} />
            {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-4 blog_item_col mt-5">
          <div className="blog_item">
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery5.jpg)'}} />
            {/* <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="blog_title">Here are the trends I see coming this fall</h4>
              <span className="blog_meta">by admin | dec 01, 2017</span>
              <a className="blog_more" href="#">Read more</a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-4 blog_item_col mt-5">
          <div className="blog_item">
            <div className="blog_background" style={{backgroundImage: 'url(images/gallery6.jpg)'}} />
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
  
  </section>

    </>
  );
}

export default Gallery;