import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png"


const Footer = () => {
    return (
        <footer className="footer p-5 bg-blue-300 text-black flex justify-between mt-10 text-black">
            <nav className="p-4">
                <h6 className="footer-title">Social Media</h6>

                <div className="flex justify-center items-center">
                    <img src={linkedin} alt="" className="w-10 p-2"/>
                    <a href="https://www.linkedin.com/company/102731568/admin/settings/" className="link link-hover" target="_blank">Linkedin</a>
                </div>
                <div className="flex justify-center items-center">
                    <img src={instagram} alt="" className="w-10 p-2"/>
                    <a href="https://www.instagram.com/red__zet/" className="link link-hover" target="_blank">Instagram</a> </div>
               
            </nav>
            <nav className="p-4">
                <h6 className="footer-title">Company</h6>
                <ScrollTop />
                <Link className="link link-hover" to={`./about`}>About</Link>
                <Link className="link link-hover" to={`./blog`}>Blogs</Link>
                <Link className="link link-hover" to={`./contact`}>Contact</Link>
                <a href="https://forms.gle/ZAjSXdWvF3QMd5Dr9" className="link link-hover" target="_black">Jobs</a>
            </nav >
            <nav className="p-4">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer;
