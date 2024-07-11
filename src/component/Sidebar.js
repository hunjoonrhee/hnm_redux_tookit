import React, { useState } from 'react';
import { Offcanvas, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const NavbarContent = () => {
    return (
      <div>
        <Link href="/">
          <img width={250} src="/image/mayday_logo.png" alt="mayday_logo.png" />
        </Link>
        <div className="sidebar-item">Admin Account</div>
      </div>
    );
  };
  return (
    <>
      <div className="sidebar-toggle">{NavbarContent()}</div>

      <Navbar bg="light" expand={false} className="mobile-sidebar-toggle">
        <Container fluid>
          <Link href="/">
            <img width={250} src="/image/mayday_logo.png" alt="mayday_logo.png" />
          </Link>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} onClick={() => setShow(true)} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand`} aria-labelledby={`offcanvasNavbarLabel-expand`} placement="start" className="sidebar" show={show}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>{NavbarContent()}</Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
