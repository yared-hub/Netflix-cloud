import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>Questions? Call 0800 861 997</p>
      <div className="footer__links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <p className="footer__country">Netflix Ethiopia</p>
    </div>
  );
}

export default Footer;