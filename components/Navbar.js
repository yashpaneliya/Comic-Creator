import Link from "next/link";
import React from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";

const StyledNavChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  height: 100%;
  /* border-left: var(--border-radius) solid ${({ theme }) => theme.border}; */
  /* border-right: var(--border-radius) solid ${({ theme }) => theme.border}; */
  border-bottom: var(--border-radius) solid ${({ theme }) => theme.border};
  padding: 0.5em 0;

  @media (min-width: 800px) {
    padding: 1em 0;
  }

  button {
    /* text-decoration: underline; */
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }

  #name {
    text-decoration: none;
    font-family: var(--font-serif-ogg);
    font-weight: 400;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: sticky;
  top: 0;
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    ${({ theme }) => theme.nav};
  background-size: 10px;
  width: 100%;
  color: ${({ theme }) => theme.color};

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);
  /* font-family: var(--font-serif-ogg);
  font-weight: 200; */
  font-size: var(--fz-lg);
  font-style: normal;
  counter-reset: item 0;
  z-index: 10;
  height: 100px;
  text-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -ms-grid-column-align: center;
  justify-self: center;

  display: -ms-grid;

  display: grid;
  -ms-grid-columns: 1fr 0px 1fr 0px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  ${StyledNavChild}:nth-child(1) {
    font-family: var(--font-serif-ogg);
    font-weight: 500;
    font-size: var(--fz-xl);
    border-left: none;
    grid-area: 1/1/2/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    /* background-color: lightskyblue; */
  }

  ${StyledNavChild}:nth-child(2) {
    border-left: var(--border-radius) solid ${({ theme }) => theme.border};
    /* -webkit-box-pack: start;
    -ms-flex-pack: start; */
    /* justify-content: flex-start; */
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-left: none;
    border-right: none;
    border-top: none;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-area: 2/1/3/4;
    overflow-x: auto;
    overflow-y: hidden;
  }

  @media (min-width: 800px) {
    height: 70px;
    -ms-grid-columns: 1fr 0px 3fr 0px 1fr;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr; */
    ${StyledNavChild}:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-area: 1/1/2/2;
    }

    ${StyledNavChild}:nth-child(2) {
      border-left: var(--border-radius) solid ${({ theme }) => theme.border};
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-area: 1/2/2/3;
    }
  }
  /* @media (min-width: 1000px) {
    width: 70%;
  } */

  ::after {
    display: none;
  }

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      color: var(--green);
      text-decoration: none;
      color: inherit;
      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.color};
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyleAlign = styled.div`
  ${({ theme }) => theme.mixins.iconWithText};
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <StyledNav>
      <StyledNavChild>
        <Link href="/" style={{ textDecoration: "none", fontWeight: "500" }}>
          Comic Creator
        </Link>
      </StyledNavChild>
      <StyledNavChild>
        <button style={{ width: "fit-content" }} onClick={toggleTheme}>
          <StyleAlign>
            {currentTheme === "light" ? <Moon /> : <Sun />} Mode
          </StyleAlign>
        </button>
      </StyledNavChild>
    </StyledNav>
  );
};

export default Navbar;
