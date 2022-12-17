import React from 'react';
import { NavLink, Navbar as NavbarBs, Container ,Nav} from "react-bootstrap";

export const Navbar = () => {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}
