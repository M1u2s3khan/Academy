import React, { useState } from 'react';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Submitted Email:', email);
    console.log('Submitted Password:', password);
    setSubmitted(true);
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center vh-100 mb-3"
        style={{ backgroundSize: 'cover', marginTop: '11rem' }}
      >
        <div className="card p-4 shadow" style={{ maxWidth: 350, width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>

          {submitted && (
            <div className="mt-3">
              <p><strong>Submitted Email:</strong> {email}</p>
              <p><strong>Submitted Password:</strong> {password}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sign;
