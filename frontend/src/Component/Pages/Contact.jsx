import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState(''); // Optional: for displaying errors
  const [showModal, setShowModal] = useState(false); // Optional: for controlling modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors on new submission

    try {
      const response = await fetch('http://localhost:8000/api/v1/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        // alert("Form submitted successfully!"); // You can use alert or the modal
        setShowModal(true); // Show the modal on success
      } else {
        console.error('Error submitting form:', response.statusText);
        setError("There was an error submitting the form. Please try again."); // Set error message
        // alert("There was an error submitting the form. Please try again."); // Or use alert
      }
    } catch (error) {
      console.error('Network error:', error);
      setError("Network error. Please check your connection and try again."); // Set network error
      // alert("Network error. Please check your connection and try again."); // Or use alert
    }
  };

  return (
    <>
      <div className="box-content-area bg-light-blue" style={{ marginTop: "12rem", background: "#000" }}>
        <div className="row">
          <div className="col-md-6 p-5">
            <div className="drop-query-inner">
              <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_640.jpg" alt="Enquire about Computer Courses at Oxford Software Institute" title="Drop us Query" />
            </div>
          </div>
          <div className="col-md-6 p-5">
            <div className="drop-query-inner">
              <div className="f-content">
                <form onSubmit={handleSubmit}>
                  {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                  <div className="field1 col-sm-12">
                    <label className="w-100 mb-3 text-white"> Your Name
                      <input
                        className="w-100"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Please enter your Full name')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </label>
                    <label className="w-100 mb-3 text-white"> Your Email
                      <input
                        className="w-100"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Please enter your email')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </label>
                    <label className="w-100 mb-3 text-white"> Phone Number
                      <input
                        className="w-100"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Please enter your phone number')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </label>
                    <label className="w-100 mb-3 text-white"> Your Address
                      <textarea
                        name="address"
                        rows={2}
                        required
                        className="form-control"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <div className="field no-margin-bt">
                    <input
                      className="mx-3 btn text-dark font-weight-bold"
                      type="submit"
                      value="Submit" // Use value instead of defaultValue for controlled components
                      style={{ background: "#ffc107" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal fade show d-block" id="modalthanks" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content" style={{ padding: '20px 0 10px 0' }}>
                <div className="modal-body text-center">
                  <p style={{ fontSize: 18, marginBottom: 20, color: '#000' }}>Thanks for showing interest. Our Counselor will contact you.</p>
                  <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)} style={{ padding: '10px 20px' }}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="container map_f">
        <div className="row">
          <div className="col-sm-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width="100%" height={400} id="gmap_canvas" src="https://maps.google.com/maps?q=ducat%20sector%2016%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; // Corrected closing parenthesis and semicolon

export default Contact;