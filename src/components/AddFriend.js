import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "./../axiosAuth";
import { useHistory } from "react-router-dom";

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
export default function AddFriend() {
  const history = useHistory();
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: null,
    email: "",
  });

  const addFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:9000/api/friends", newFriend)
      .then((res) => {
        setNewFriend({
          name: "",
          age: null,
          email: "",
        });
        history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={addFriend}>
      <StyledLabel htmlFor="name">
        FRIEND NAME
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="age">
        FRIEND AGE
        <StyledInput
          type="number"
          id="age"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="email">
        FRIEND EMAIL
        <StyledInput
          type="email"
          id="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledSubmitButton type="submit">SUBMIT</StyledSubmitButton>
    </StyledForm>
  );
}
