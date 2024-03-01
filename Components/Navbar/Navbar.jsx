import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="container dark-nav">
      
         <img className="logo"src="logo.png"/>
         <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about ' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to='contact ' smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact us</button></Link></li>
         </ul>
    </nav>
  )
}

export default Navbar
