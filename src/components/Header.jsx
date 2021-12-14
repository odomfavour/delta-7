import React, {useState} from 'react'
import { Navbar, Container, Nav,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
import hamburger from '../images/menu.svg'
import logo from '../images/logo.png'
const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>
            <Navbar className="main-navbar" expand="lg">
                <Container>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <div className="d-flex">
                    <button type="button" className="me-3 navbar-toggler" aria-label="Toggle navigation" aria-expanded={!isNavCollapsed ? true : false} data-toggle="collapse" data-target="#navbarScroll"aria-controls="navbarScroll" onClick={handleNavCollapse}>
                    <img src={hamburger} alt=""/>
                    </button>
                    
                    <Navbar.Brand href="#"><img src={logo} alt="" className='img-fluid'/></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} >
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
