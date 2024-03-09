import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h2>Friends Count : {friends.length} </h2>
      {friends.map((friend) => {
        return <Friend friend={friend}></Friend>
      })}
    </div>
  );
}
