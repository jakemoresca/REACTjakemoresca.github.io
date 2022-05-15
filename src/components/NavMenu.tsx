import * as React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../scss/resume.scss";
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
                    <NavbarBrand tag={Link} to="/">
                        <span className="d-block d-lg-none">Jake Daryl Moresca</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Profile" />
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="navbar-toggler" />
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>
                        <ul className="navbar-nav">
                            <NavItem>
                                <NavLink tag={Link} className="nav-link js-scroll-trigger" to="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link js-scroll-trigger" to="/experience">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link js-scroll-trigger" to="/education">Education</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link js-scroll-trigger" to="/skills">Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link js-scroll-trigger" to="/projects">Personal Projects</NavLink>
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
