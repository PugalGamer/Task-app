import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import informedDecisionImage from "./img/undraw_informed_decision_p2lh.svg";
export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    margin: 5,
    fontSize: "1.3rem",
    fontWeight: "bold",
  };
  const st = {
    textDecoration: "none",
    backgroundColor: isHovered ? "lightgray" : "transparent",
  };
  const containerStyle = {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };
  const columnStyle = {
    width: "calc(50% - 5px)",
    boxSizing: "border-box",
    overflow: "hidden",
    // border: "1px solid red",
    height: "650px",
    // Subtracting the border width from 50% to maintain even space between columns
  };
  return (
    <div className="portfolio">
      <div
        className="head"
        style={{
          //   border: "1px solid white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2 style={{ marginRight: "800px" }}>DEVOPS Pvt LTD</h2>
        <ul style={{ display: "flex" }}>
          <li style={style}>
            <a style={st} href="">
              <Link style={st} to="/login">
                User Login
              </Link>
            </a>
          </li>
          <li style={style}>
            <a style={st} href="">
              <Link style={st} to="/admin">
                Admin
              </Link>
            </a>
          </li>
        </ul>
      </div>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <div
            style={{
              //   border: "1px solid blue",
              height: "100%",
              //   alignItems: "center",
              display: "grid",
              placeContent: "center",
            }}
          >
            <header>
              <h1>Welcome to TaskManagement</h1>
              <p>Your Ultimate Solution for Organizing Tasks</p>
            </header>
            <main>
              <p>
                TaskManagement is your go-to platform for efficient task
                organization.
              </p>
              <p>
                Easily create, categorize, and prioritize your tasks for
                streamlined productivity.
              </p>
              <p>
                With TaskManagement, you can collaborate with your team, assign
                tasks, and track progress effortlessly.
              </p>
              <p>
                Sign up now and take control of your tasks to achieve your goals
                with ease!
              </p>
            </main>
          </div>
          {/* <p>psatdfadsjbkhfb jhsdbfksydgfsd</p> */}
          {/* <img src={informedDecisionImage} alt="Informed Decision" /> */}
        </div>
        <div style={columnStyle}>
          {/* <p>jfgbskeudfgwuglui</p> */}
          <img src={informedDecisionImage} alt="Informed Decision" />
        </div>
      </div>
    </div>
  );
}
