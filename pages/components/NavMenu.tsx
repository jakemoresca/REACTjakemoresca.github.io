import * as React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router-dom';
import Link from "next/link";
import Image from "next/image";
import profile from "../img/profile.jpg";

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    componentDidMount()
    {
    }

    render()
    {
        return (
            <header>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" light id="sideNav">
                    <NavbarBrand to="/">
                        <span className="d-block d-lg-none">Jake Daryl Moresca</span>
                        <span className="d-none d-lg-block">
                            <Image className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Profile" />
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="navbar-toggler" />
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>
                        <ul className="navbar-nav">
                            <NavItem>
                                <Link className="nav-link js-scroll-trigger" href="/" passHref>
                                    <NavLink className="nav-link js-scroll-trigger">About</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link js-scroll-trigger" href="/experience" passHref>
                                    <NavLink className="nav-link js-scroll-trigger">Experience</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link js-scroll-trigger" href="/education" passHref>
                                    <NavLink className="nav-link js-scroll-trigger">Education</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link js-scroll-trigger" href="/skills" passHref>
                                    <NavLink className="nav-link js-scroll-trigger">Skills</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link js-scroll-trigger" href="/projects" passHref>
                                    <NavLink className="nav-link js-scroll-trigger" to="/projects">Personal Projects</NavLink>
                                </Link>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }

    private toggle = () =>
    {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
