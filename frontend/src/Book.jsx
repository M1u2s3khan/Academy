import React, { useState } from 'react';

const Book = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    track: 'Weekend',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Booking submitted successfully!');
    // Reset form if needed
    // setFormData({ name: '', email: '', phone: '', course: '', track: 'Weekend' });
  };

  return (
    <div
      className="container-fluid p-3 mb-5"
      style={{ background: '#03b4ea', marginTop: '10rem' }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-warning text-dark text-center fw-bold">
              Book Your Course
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Course Selection */}
                <div className="mb-3">
                  <label htmlFor="course" className="form-label">
                    Select Course
                  </label>
                  <select
                    className="form-select"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Choose a Course --</option>
                    <option>UI Designer</option>
                    <option>React Development</option>
                    <option>Software Development</option>
                    <option>Web Development</option>
                    <option>Java Development</option>
                    <option>C and C++ Courses</option>
                    <option>Advance Excel</option>
                    <option>Graphic Designing</option>
                  </select>
                </div>

                {/* Track Type */}
                <div>
                  <h5>Track Type</h5>
                  <div className="form-check mx-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="track"
                      id="regular"
                      value="Regular"
                      checked={formData.track === 'Regular'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="regular">
                      Regular
                    </label>
                  </div>
                  <div className="form-check mx-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="track"
                      id="weekend"
                      value="Weekend"
                      checked={formData.track === 'Weekend'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="weekend">
                      Weekend
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn bg-warning text-dark fw-bold border-0"
                  >
                    Submit Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default Book;
