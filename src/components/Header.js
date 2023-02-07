import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-bottom: 0.2rem solid black;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
`;

const StyledNavBar = styled.div`
  display: flex;
  column-gap: 2vw;
`;

const StyledNavLink = styled.button`
  background-color: black;
  color: white;
  font-size: 2rem;
  padding: 2vh 1vw;
`;
export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>FRIENDS DATABASE</StyledTitle>
      <StyledNavBar>
        <Link to="/">
          <StyledNavLink>LOGIN</StyledNavLink>
        </Link>
        <Link to="/friends-list">
          <StyledNavLink>FRIENDS LIST</StyledNavLink>
        </Link>
        <Link to="/add-friend">
          <StyledNavLink>ADD FRIEND</StyledNavLink>
        </Link>
        <StyledNavLink>LOGOUT</StyledNavLink>
      </StyledNavBar>
    </StyledHeader>
  );
}
