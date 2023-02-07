import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./../axiosAuth";
import styled from "styled-components";

const StyledFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledFriend = styled.div`
  display: flex;
  column-gap: 2vw;
`;
export default function FriendsList() {
  let [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        setFriendsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <StyledFriendsContainer>
      <h2>FRIENDS LIST</h2>
      <div>
        {friendsList.map((friend) => (
          <StyledFriend key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.email}</p>
          </StyledFriend>
        ))}
      </div>
      <div></div>
    </StyledFriendsContainer>
  );
}
