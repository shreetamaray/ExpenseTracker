import React, { useState } from "react";
import { getDocs, collection, where, query } from 'firebase/firestore';
import { fireDb } from "../configs/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Input, LinkContainer, LinkWrapper, LoginButton, LoginContainer, LoginForm, LogoContainer } from "../components/LoginComponents";
import { setErrorMessage, showError } from "../redux/slices/errorSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shouldShowError = useSelector((state) => state.error.value.showError);
  const message = useSelector((state) => state.error.value.errorMessage);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      dispatch(showError(false));
      dispatch(setErrorMessage(''));
      const qry = await query(collection(fireDb, "users"),
        where ("email", "==", email),
        where ("password", "==", password)
      );
      const existingUsers = await getDocs(qry);
      if (existingUsers.size > 0) {
        const userData = {
          name: existingUsers.docs[0].data().name,
          email: existingUsers.docs[0].data().email,
          id: existingUsers.docs[0].id
        };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate('/');
      } else {
        if (email === '' || password === '') {
          dispatch(setErrorMessage('Enter proper data'));
        }
        dispatch(showError(true));
      }
    } catch(e) {
      dispatch(showError(true));
      dispatch(setErrorMessage('Something Went Wrong'));
    }
  };
  return (
    <LoginContainer>
      <LogoContainer>
        PLEASE LOG IN!
      </LogoContainer>
      <LoginForm>
        <Input
          type="text"
          placeholder="&#xf003;   Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder=" &#xf023;  Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {shouldShowError && <ErrorMessage>{message}</ErrorMessage>}
      </LoginForm>
      <LinkContainer>
        <LoginButton onClick={handleLogin}>Log In</LoginButton>
        <LinkWrapper><Link to='/register'>Sign Up Instead?</Link></LinkWrapper>
      </LinkContainer>
    </LoginContainer>
  );
};

export default Login;