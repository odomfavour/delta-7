import React from 'react'
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
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#token">Token</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#metaverse">Metaverse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#nft-market">NFT Market</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn main-btn" to="/">BUY DELTA7</Link>
                        </li>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
