"use client";

import {
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="Footer ">
      <div className="wrapper">
        <div className="footer-content">
          <div className="social-links">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="social-icon"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="social-icon"
            >
              <FaYoutube size={24} />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              className="social-icon"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <div className="copyright">
            <p>
              © {new Date().getFullYear()} Benjamin Barrile. All rights
              reserved.
            </p>
            <p>For Sync & Licensing, contact Benjamin directly</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
