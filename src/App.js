import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widget from "./Widget/Widget";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}
