import React, {useState} from 'react'
import { Navbar, Container, Nav,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
import hamburger from '../images/menu.svg'
import logo from '../images/logo.png'
const Header = () => {
    // const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>
            <Navbar className="main-navbar" expand="lg" fixed="top">
                <Container>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <div className="d-flex align-items-center">
                    <Navbar.Toggle aria-controls="navbarScroll" className='me-3'><img src={hamburger} alt=""/></Navbar.Toggle>
                    <Navbar.Brand href="#"><img src={logo} alt="" className='img-fluid'/></Navbar.Brand>
                </div>
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Token</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Metaverse</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/">NFT Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/">Blind Box</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Docs</Link>
                            </li>
                        <button className="btn btn-warning">BUY DEFIWAR</button>
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
