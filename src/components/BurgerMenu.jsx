import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  margin: auto 20px;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.7;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  div:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(0.5rem)" : "translateX(0)")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
  div {
    width: 1.5rem;
    height: 0.125rem;
    background: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  background: #16192C;

  transition: transform 0.3s ease-in-out;

  a {
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const BurgerAndMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleMenuClick = () => {
    setOpen(!open);
  };
  return (
    <>
       <StyledBurger open={open} onClick={handleMenuClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu className="max-lg:w-full text-2xl space-y-6" open={open}>
        <NavLink to="/" onClick={handleMenuClick}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={handleMenuClick}>
          Services
          </NavLink>
          <NavLink to="/our-products" onClick={handleMenuClick}>
          Our Products
          </NavLink>
          <NavLink to="/our-team" onClick={handleMenuClick}>
          Our Team
          </NavLink>
          <NavLink to="/about" onClick={handleMenuClick}>
          About us
          </NavLink>
          <NavLink to="/contact" onClick={handleMenuClick}>
            Contact Us
          </NavLink>
      </StyledMenu>
    </>
  );
};

export default BurgerAndMenu;