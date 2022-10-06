import styled from "styled-components";

const LoginContainer = styled.div`
  background: #0b2144;
  width: 40%;
  margin: 100px auto;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(38, 35, 128, 1);
  -moz-box-shadow: 0px 0px 3px 1px rgba(38, 35, 128, 1);
  box-shadow: 0px 0px 3px 1px rgba(38, 35, 128, 1);
  @media screen and (max-width:800px) {
     width:100%;
     height: 100vh;
     margin: auto;
  }
`;

const LogoContainer = styled.div`
  color: white;
  font-family: sans-serif;
  font-size: 15pt;
  font-weight: 600;
  text-align: center;
  padding-top: 40px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LoginButton = styled.button`
  height: 40px;
  width: 80%;
  border-radius: 4px;
  margin: 30px auto 20px auto;
  border: none;
  background: #27d4e8;
  color: #ffffff;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 14pt;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  margin: 20px auto;
  border-left: none;
  border-right: none;
  border-top: none;
  color: white;
  background: #0b2144;
  padding-left:5px;
  font-family: FontAwesome, "Open Sans", Verdana, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  :focus {
    outline: none
  }
`;

const LinkWrapper = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    letter-spacing: .1em;
    text-decoration: underline;
  }
`;

const LoginForm = styled.div`
  width: 80%;
  margin: 40px auto;
  text-align: center;
`;

const ErrorMessage = styled.div`
  font-size: 15px;
  color: red;
  text-align:left;
`

export {LoginContainer, LogoContainer, LoginForm, LinkWrapper, Input, LoginButton, LinkContainer, ErrorMessage};