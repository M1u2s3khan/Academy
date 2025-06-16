import React, { useState } from 'react';

const Ragistration = () => {
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
         const response = await fetch('http://localhost:8000/api/v1/onlineragistration/create', {
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
        <div className="container-fluid m-auto">
            <div className="row online-registration p-3" style={{ marginTop: '12rem' }}>
                <div className="col-md-6 online-registration-left order-md-1 order-2 d-none d-md-block">
                    <div className="popup-left">
                        <h3>
                            <img 
                                alt="head-logo" 
                                fetchpriority="high" 
                                width={300} 
                                height={120} 
                                decoding="async" 
                                className="image-fluid" 
                                srcSet="https://t3.ftcdn.net/jpg/02/11/07/58/360_F_211075851_gSKybVNvDWgZnrIaleNsQfIz2mqPKaor.jp" 
                                style={{ color: 'transparent' }} 
                            />
                        </h3>
                    </div>
                </div>
                <div className="col-md-6 online-registration-right order-md-2 order-1">
                    <h5>Online Registration Form</h5>
                    <p>Register online today and take the first step towards success!</p>

                    {/* {!submittedData ? ( */}
                        <form onSubmit={handleSubmit}>
                            <div className="input-fields">
                                <div className="mb-1">
                                    <label>Name</label>
                                    <input 
                                        placeholder="Enter Your Name" 
                                        required 
                                        minLength={3} 
                                        className="form-control" 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row mb-1">
                                    <div className="col-md-6">
                                        <label>Email Address</label>
                                        <input 
                                            placeholder="Enter Email Address" 
                                            required 
                                            className="form-control" 
                                            type="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Phone Number</label>
                                        <input 
                                            placeholder="Enter Phone Number" 
                                            required 
                                            className="form-control" 
                                            type="number" 
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-md-6">
                                        <label>Course</label>
                                        <select 
                                            name="course" 
                                            className="form-control" 
                                            required 
                                            value={formData.course} 
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Course</option>
                                            <option value="Cloud">Cloud</option>
                                            <option value="SOLIDWORKS">SOLIDWORKS</option>
                                            <option value="Flutter">Flutter</option>
                                            {/* Add other options here */}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Branch</label>
                                        <select 
                                            name="center" 
                                            className="form-control" 
                                            required 
                                            value={formData.center} 
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Branch</option>
                                            <option value="Noida Sector 62">Noida Sector 62</option>
                                            <option value="Bulandshahr">Bulandshahr</option>
                                            {/* Add other options here */}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <label>Address</label>
                                    <textarea 
                                        name="address" 
                                        rows={2} 
                                        required 
                                        className="form-control" 
                                        placeholder="Enter Address" 
                                        value={formData.address} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row mb-1">
                                    <div className="col-md-6">
                                        <label>City</label>
                                        <input 
                                            required 
                                            placeholder="Enter City Name" 
                                            className="form-control" 
                                            type="text" 
                                            name="city" 
                                            value={formData.city} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Country</label>
                                        <input 
                                            required 
                                            placeholder="Enter Country Name" 
                                            className="form-control" 
                                            type="text" 
                                            name="country" 
                                            value={formData.country} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-md-6">
                                        <label>Zipcode</label>
                                        <input 
                                            required 
                                            placeholder="Enter ZIP Code" 
                                            className="form-control" 
                                            type="text" 
                                            name="zipcode" 
                                            value={formData.zipcode} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Amount</label>
                                        <input 
                                            required 
                                            placeholder="Enter Amount" 
                                            className="form-control" 
                                            type="number" 
                                            name="amount" 
                                            value={formData.amount} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                 
                      
            
                </div>
            </div>
        </div>
    );
};

export default Ragistration;