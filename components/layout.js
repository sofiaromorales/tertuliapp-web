import React from 'react';
import Head from "next/head";
import Link from "next/link";

import { Container, Col, Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const Layout = (props) => {
  const title = "Welcome to Nextjs";
  return (
    <div>
        <Navbar bg='primary' variant='dark' className='py-3'>
            <Navbar.Brand href='#home'>
                Navbar
            </Navbar.Brand>
            <Nav className='ml-auto'>
                <Nav.Link href="/home">Cursos</Nav.Link>
                <Nav.Link href="/features">Foros</Nav.Link>
                <Nav.Link href="/pricing">Mi progreso</Nav.Link>
            </Nav>
        </Navbar>
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Layout
