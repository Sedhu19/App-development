import React from 'react';
import Sidebar from './Sidebar';
import '../asserts/css/Feedback.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import boto from '../images/user1.png';

export const Feedback = () => {
  return (
    <div fluid className="dashboard-container">
      <div className="dashboard-content">
        <Sidebar />
        <h1 className='sed'>
          <header className='sedh'>Feedbacks</header>
        </h1>
      </div>
      <div className="testimonials-container">
        <h1 className="testimonials-heading">Customer says</h1>
        <div className="testimonials">
          {/* Testimonial 1 */}
          <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Worst website I have ever seen.</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-name">Semdhu</div>
                <div className="testimonial-position">Amazon owner</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Worst website raa!</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-name">Vaithiya</div>
                <div className="testimonial-position">student at SKCT</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  {/* <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" /> */}
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Excellent product and outstanding customer support!</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-name">Saran</div>
                <div className="testimonial-position">on duty</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  {/* <FaStar className="star" /> */}
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
