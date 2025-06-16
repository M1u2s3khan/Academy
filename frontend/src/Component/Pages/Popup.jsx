import React from 'react';

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <div className="popup-overlay" onClick={onClose}> {/* Overlay to close when clicking outside */}
      <div className="popup-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <h2>Book Now</h2>
        <form>
          {/* Your form elements go here */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="course">Interested Course:</label>
            <select className="form-control" id="course">
              <option value="">Select a course</option>
              <option value="ui-designer">UI Designer</option>
              <option value="react-development">React Development</option>
              {/* Add other course options */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
        <button className="close-button" onClick={onClose}>&times;</button> {/* Close button */}
      </div>
    </div>
  );
};

export default Popup;