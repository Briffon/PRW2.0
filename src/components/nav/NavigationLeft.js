import React from "react";
import "./NavigationLeft.css";
import { NavLink } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBoxOpen } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

//THIS SHOULD BE NAV LINKS WITH NAV ELEMENT

const NavigationLeft = () => {
  return (
    <nav style={styles.container} className="nav-container">
      <div style={styles.logoContainer}>
        <img
          width="100%"
          src={require("../../images/logo/PNG/CCGW.png")}
          alt="logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.list}>
        <h1 style={styles.admin}>Admin Panel</h1>
        <NavLink to="/Home" style={styles.listItem}>
          <FaHome style={styles.icon} />
          Home
        </NavLink>
        <NavLink to="/Inventory" style={styles.listItem}>
          <FaBoxOpen style={styles.icon} />
          Inventory
        </NavLink>
        <NavLink to="/Analyics" style={styles.listItem}>
          <GoGraph style={styles.icon} />
          Analytics
        </NavLink>
        <NavLink to="/Events" style={styles.listItem}>
          <MdEvent style={styles.icon} />
          Events
        </NavLink>
        <NavLink to="/SignIn" style={styles.listItem}>
          <FaDoorOpen style={styles.icon} />
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationLeft;

const styles = {
  container: {
    backgroundColor: "#172121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
    border: "none ",
    width:"20%"
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column"
  },
  listItem: {
    display: "inline-block",
    textAlign: "left",
    color: "white",
    margin: "1rem",
    fontSize: "1.5em",
    fontWeight: "600",
    textDecoration: "none"
  },
  logoContainer: {
    backgroundColor: "#4EA699",
    padding: "1rem",
    textAlign: "center",
    color: "white"
  },
  icon: {
    margin: "auto",
    marginRight: "1rem",
    color: "#77ACA2"
  },
  logo: {
    marginTop: ".5rem"
  },
  admin: {
    //marginTop: "0",
    color: "white"
  }
};
