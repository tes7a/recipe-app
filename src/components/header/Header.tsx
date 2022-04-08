import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import s from './header.module.css'
import logo from './../../img/logo.svg'
import Button from "react-bootstrap/esm/Button";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-lin {
    color: #adb1b8;

    &:hover {
      color: white;
    }

    font-weight: bold;
  }
`

type Header = {
    setShow: (value: boolean) => void
}

export const Header: React.FC<Header> = ({setShow}) => {
    const onShowHandler = () => {
        setShow(true);
    }

    return <div>
        <Styles>
            <Navbar collapseOnSelect expand={'lg'} bg={'dark'} variant={'dark'}>
                <Navbar.Brand href={'/recipe-app'} className={s.iconNavBar}>
                    <img className={s.imgLogo} src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'responsive-navbar-nav'}></Navbar.Toggle>
                <Navbar.Collapse id={'responsive-navbar-nav'} className={s.navBarCollapse}>
                    <Nav className={s.nav}>
                        <Nav.Link as={Link} to={'/recipe'}>Recipes</Nav.Link>
                        <Nav.Link as={Link} to={'/favorite'}>Favorite</Nav.Link>
                    </Nav>
                    <div>
                        <Button className={s.addDish} variant="outline-dark" onClick={onShowHandler}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18V16H8V14H10V12H12V14H14V16H12V18H10Z" fill="currentColor"/>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Add Dish</Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </div>
}