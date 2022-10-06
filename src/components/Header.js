import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
`;

const LinksContainer = styled.div`
  a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    color: #1d96b2 !important;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  float: right;
`;

const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
    alert('Successfully loggedout');
  }
  return (
    <HeaderContainer>
      <LinksContainer>
        <a href="/">Expense Tracker</a>
        <HeaderRight>
            <a onClick={onLogout}>Logout?</a>
        </HeaderRight>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;