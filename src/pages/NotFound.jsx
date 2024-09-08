import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';

function NotFound() {
  return (
    <>
    <div>
      <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
      <p style={{ color: 'red' }}>The page you are looking for does not exist.</p>
    </div>
    </>
  );
}

export default NotFound;
