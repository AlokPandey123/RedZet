import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to={`./home`}>Home</Link></li>
          <li><Link to={`./about`}>About</Link></li>
          <li><Link to={`./blog`}>Blogs</Link></li>
          <li><Link to={`./contact`}>Contact</Link></li>
        </ul>
      </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={`./home`}>Home</Link></li>
            <li><Link to={`./about`}>About</Link></li>
            <li><Link to={`./blog`}>Blogs</Link></li>
            <li><Link to={`./contact`}>Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="navbar-center">
        
          
            <h2 className='text-xl font-bold'  id='companyName'>RedZet Essentials Pvt. Ltd.</h2>
         
    
      </div>


      <div className="navbar-end">
        
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-20">
            <img alt="Tailwind CSS Navbar component" src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}
