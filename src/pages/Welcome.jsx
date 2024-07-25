import React, { useState } from "react";
import logo from "@i/group.svg";
import Device from "./Device";
function Welcome() {
  const [openNext, setOpenNext] = useState(false);
  return (
    <>
      {openNext ? (
        <Device />
      ) : (
        <div className="welcome">
          <div className="container">
            <div className="welcome__content">
              <img src={logo} alt="logo" className="welcome__content-logo" />
              <h1 className="welcome__content-title">Добро пожаловать! </h1>
              <button className="welcome__content-btn" onClick={() => setOpenNext(true)}>Начать работу</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Welcome;
