import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import css from "./footer.module.css"
import classNames from "classnames";

const Footer = ({}) => {
  return (
    <>
    <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div className={classNames(css.formContainer)}>
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form>
          <div className={classNames(css.formGroup)}>
            <label htmlFor="name" className="text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="rounded-lg w-full px-4 py-2 border border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className={classNames(css.formGroup)}>
            <label htmlFor="email" className="text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="rounded-lg w-full px-4 py-2 border border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className={classNames(css.formGroup)}>
            <label htmlFor="message" className="text-gray-700">Your Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="rounded-lg w-full px-4 py-2 border border-gray-300 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-700 rounded-lg px-6 py-2 transition-colors duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="flex justify-center items-center space-x-4">
        <p className="text-sm font-bold mt-2">
          Made With ❤ by{" "}
          <Link href="http://www.chetanverma.com">
            <a className="underline underline-offset-1">PolarBear</a>
          </Link>
        </p>
        <a
        href="https://www.instagram.com/your_instagram_username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500"
      >
        <i className="fab fa-instagram text-2xl" style={{ color: 'white' }}></i>
      </a>
      <a
        href="https://www.facebook.com/your_facebook_page"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500"
      >
        <i className="fab fa-facebook text-2xl" style={{ color: 'white' }}></i>
      </a>
      </div>
    </footer>
  </>
  

  );
};

export default Footer;
