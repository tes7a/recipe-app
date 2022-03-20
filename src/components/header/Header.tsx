import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import {Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-lin {
    color: #adb1b8;

    &:hover {
      color: white;
    }
  }
`

export const Header = () => {
    return <div>
        <Styles>
                <Navbar collapseOnSelect expand={'lg'} bg={'dark'} variant={'dark'}>
                    <Navbar.Brand href={'/recipe-app'}>Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls={'responsive-navbar-nav'}></Navbar.Toggle>
                    <Navbar.Collapse id={'responsive-navbar-nav'}>
                        <Nav className={'mr-auto'}>
                            <Nav.Link><Link to={'/recipe'}>Recipes</Link></Nav.Link>
                            <Nav.Link><Link to={'/favorite'}>Favorite</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Styles>
    </div>
}