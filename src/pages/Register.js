import React, { useState } from "react";
import { addDoc, getDocs, collection, where, query } from 'firebase/firestore';
import { fireDb } from "../configs/firebaseConfig";
import { Link } from "react-router-dom";
import { ErrorMessage, Input, LinkContainer, LinkWrapper, LoginButton, LoginContainer, LoginForm, LogoContainer } from "../components/LoginComponents";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage, showError } from "../redux/slices/errorSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const shouldShowError = useSelector((state) => state.error.value.showError);
  const message = useSelector((state) => state.error.value.errorMessage);
  const handleRegister = async () => {
    try {
      dispatch(showError(false));
      dispatch(setErrorMessage(''));
      if (name === '' || email === '' || password === '') {
        dispatch(showError(true));
        dispatch(setErrorMessage('Fill All Details'));
        return;
      }
      const qry = await query(collection(fireDb, "users"),
        where ("email", "==", email)
      );
      const existingUsers = await getDocs(qry);
      if (existingUsers.size > 0) {
        dispatch(showError(true));
        dispatch(setErrorMessage('User Exists Already'));
        return;
      }
      const response = await addDoc(collection(fireDb, "users"), {
        name: name,
        email: email,
        password: password
      });
      if (response.id) {
        alert("user created successfully");
      } else {
        dispatch(showError(true));
        dispatch(setErrorMessage('Please Check Details'));
      }
    } catch (error) {
      dispatch(showError(true));
      dispatch(setErrorMessage('Something Went Wrong'));
    }
  };
  return (
    <LoginContainer>
      <LogoContainer>
        CREATE USER!
      </LogoContainer>
      <LoginForm>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <LoginButton onClick={handleRegister}>Register</LoginButton>
        <LinkWrapper><Link to='/login'>Sign In Instead?</Link></LinkWrapper>
      </LinkContainer>
    </LoginContainer>   
  );
};

export default Register;