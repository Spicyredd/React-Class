import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSpecificUser = () => {
  let [user, setUser] = useState({});
  let params = useParams();
  const getData = async () => {
try {
      let result = await axios({
        url: `https://66ecf37e380821644cdac893.mockapi.io/user/${params.id}`,
        method: "get",
      });
      setUser(result.data);
} catch (error) {
  toast.error(error.message)
}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>Name is {user.name}</p>
      <p>Age is {user.age}</p>
      <p>Email is {user.email}</p>
      <p>Password is {user.password}</p>
    </div>
  );
};

export default ReadSpecificUser;
