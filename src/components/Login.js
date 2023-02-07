import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "./../axiosAuth";
import { useHistory } from "react-router-dom";
const StyledPageHeader = styled.h2`
  font-size: 3rem;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  width: 60%;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  background-color: black;
  border: none;
  color: white;
  width: 100%;
  height: 15vh;
  font-size: 1.5rem;
`;

const StyledSubmitButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  width: 100%;
  height: 15vh;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <StyledPageHeader>LOGIN</StyledPageHeader>
      <StyledForm onSubmit={login}>
        <StyledLabel htmlFor="username">
          USERNAME
          <StyledInput
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel htmlFor="password">
          PASSWORD
          <StyledInput
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledSubmitButton type="submit">SUBMIT</StyledSubmitButton>
      </StyledForm>
    </div>
  );
}
