import React, { useState } from "react";
import Logo from "../components/Logo";
import { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [jwt, setJwt] = useLocalStorage("token", "");
  const [isAdmin, setAdmin] = useLocalStorage("isAdmin", false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate("/login");
  };
  const fetchUserAccount = () => {
    // get jwt from localStorage
    console.log(jwt);

    // run get api
    axios
      .get("http://localhost:8080/private", {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        // handle success
        console.info(response.data);
        setUser(response.data.user);
        setAdmin(response.data.user.isAdmin);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
        handleNavigateToLogin();
      })
      .finally(function () {
        // always executed
      });
  };

  const handleLogoutOut = () => setJwt("");

  useEffect(() => {
    fetchUserAccount();
  }, [jwt]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#171A21",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <h4 style={{ color: "white" }}>{user?.username || "no data"}</h4>
          <button onClick={handleLogoutOut}>Logout</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>Welcome back</h1>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h3 style={{ marginTop: "3rem" }}>User information</h3>
          <div style={{ marginTop: "1rem" }}>
            <p>Username</p>
            <p style={{ fontWeight: "bold" }}>{user?.username || "no data"}</p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>Email</p>
            <p style={{ fontWeight: "bold" }}>{user?.email || "no data"}</p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>Admin status</p>
            <p style={{ fontWeight: "bold" }}>
              {user?.isAdmin ? "True" : "False"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
