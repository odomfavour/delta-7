import React, {useState} from 'react'
import { Navbar, Container, Nav,} from 'react-bootstrap'
import './Header.css'
import hamburger from '../images/menu.svg'
const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>
            {/* <nav class="navbar navbar-expand-lg navbar-light main-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Token</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Metaverse</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">NFT Market</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blind Box</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Docs</a>
                            </li>
                        </ul>
                        <button class="btn btn-warning">BUY DEFIWAR</button>
                    </div>
                </div>
            </nav> */}
            <Navbar className="main-navbar" expand="lg">
                <Container>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <div className="d-flex">
                    <button type="button" className="me-3 navbar-toggler" aria-label="Toggle navigation" data-toggle="collapse" data-target="#navbarScroll"aria-controls="navbarScroll">
                    <img src={hamburger} alt=""/>
                    </button>
                    
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} >
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Token</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Metaverse</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">NFT Market</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blind Box</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Docs</a>
                            </li>
                        <button class="btn btn-warning">BUY DEFIWAR</button>
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
