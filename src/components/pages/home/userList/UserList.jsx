import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const people = [
    {
      id: 1,
      username: "username",
      email: "Email",
      status: "Status",
      Time: "Time",
    },
    {
      id: 2,
      username: "Janeth GoGetter",
      email: "Janet@gmail.com",
      status: "Single",
      Time: "12:00",
    },
    {
      id: 3,
      username: "Kelvin  GoGetter",
      email: "Kelvint@gmail.com",
      status: "Married",
      Time: "15:00",
    },
    {
      id: 4,
      username: "Oko Henry",
      email: "Henry@gmail.com",
      status: "Divorced",
      Time: "02:22",
    },
    {
      id: 5,
      username: "Fidelis Gabou",
      email: "JFidelis@gmail.com",
      status: "Single",
      Time: "12:00",
    },
    {
      id: 6,
      username: "Hankini Aminat",
      email: "Aminat@gmail.com",
      status: "Married",
      Time: "06:11",
    },
  ];

  return (
    <div>
      {people.map((item) => {
        return (
          <ul key={item.id}>
            <li to="user"> {item.username} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
