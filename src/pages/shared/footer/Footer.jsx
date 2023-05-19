import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import logo from '../../../assets/logo_1_300x300.avif'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-10">
            <div>
                <img src={logo} alt="" />
                <div className='flex'>
                    <FaFacebook className='mr-2'></FaFacebook>
                    Facebook
                </div>
                <div className='flex'>
                    <FaPinterest className='mr-2'></FaPinterest>
                    Pintarest
                </div>
                <div className='flex'>
                    <FaInstagram className='mr-2'></FaInstagram>
                    Instagram
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;