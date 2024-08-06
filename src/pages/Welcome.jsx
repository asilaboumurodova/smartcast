import React, { useContext, useState } from "react";
import logo from "@i/group.svg";
import Device from "./Device";
import { Context } from "../context/Context";
function Welcome() {
  const [openNext, setOpenNext] = useState(false);
  const { userlang } = useContext(Context)
  return (
    <>
      {openNext ? (
        <Device />
      ) : (
        <div className="welcome">
          <div className="container">
            <div className="welcome__content">
              <img src={logo} alt="logo" className="welcome__content-logo" />
              <h1 className="welcome__content-title">
                {userlang === 0 && "Xush kelibsiz!"}
                {userlang === 1 && "Добро пожаловать!"}
                {userlang === 2 && "Welcome!"}
              </h1>
              <button className="welcome__content-btn" onKeyDown={(e) => {if (e.keyCode === 13) setOpenNext(true)}} autoFocus>
                {userlang === 0 && "Ishni boshlash"}
                {userlang === 1 && "Начать работу"}
                {userlang === 2 && "Start the work"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Welcome;
