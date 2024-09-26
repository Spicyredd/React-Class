import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);
  /*
  hit api on page load
  api give s data
  set data to users
  */
  const navigate = useNavigate();
  const getData = async () => {
    try {
      let result = await axios({
        url: "https://66ecf37e380821644cdac893.mockapi.io/user",
        method: "get",
      });
      console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {users.map((value, i) => {
        return (
          <div>
            <div style={{ border: "solid red 2px", marginBottom: "10px" }}>
              <p>My name is {value.name}</p>
              <p>My email is {value.email}</p>
              <p>My password is {value.password}</p>
              <p>My age is {value.age}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate(`/user/${value.id}`);
                }}
              >
                View
              </button>
              <button
                onClick={() => {
                  navigate(`/user/update/${value.id}`);
                }}
              >
                Update
              </button>
              <button
                onClick={async () => {
                  try {
                    await axios({
                      url: `https://66ecf37e380821644cdac893.mockapi.io/user/${value.id}`,
                      method: "delete",
                    });
                    toast.success("User Deleted Successfully");
                  } catch (error) {
                    toast.error("Unable To Delete User");
                  }
                  getData();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUser;
