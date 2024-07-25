import React, { useState } from "react";
import logo from "@i/group.svg";
import checkedBg from "@i/checkedBg.svg";
import checked from "@i/checked.svg";
import Welcome from "./Welcome";
function Entry() {
  const [selected, setSelected] = useState(null);
  const [changeWindow, setChangeWindow] = useState(true);
  const toggleCheck = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <> {changeWindow ?
      <div className="entry">
        <div className="container">
          <div className="entry__content">
            <img src={logo} alt="logo" className="entry__content-img" />
            <h1 className="entry__content-title">Выберите язык приложения</h1>
            <div className="entry__content-items">
              <div
                className={`entry__content-items-item ${selected === 0 ? "selected" : ""
                  }`}
                onClick={() => toggleCheck(0)}
              >
                <p>O’zbekcha</p>
                <img src={selected === 0 ? checked : checkedBg} alt="" />
              </div>
              <div
                className={`entry__content-items-item ${selected === 1 ? "selected" : ""
                  }`}
                onClick={() => toggleCheck(1)}
              >
                <p>Русский</p>
                <img src={selected === 1 ? checked : checkedBg} alt="" />
              </div>
              <div
                className={`entry__content-items-item ${selected === 2 ? "selected" : ""
                  }`}
                onClick={() => toggleCheck(2)}
              >
                <p>English</p>
                <img src={selected === 2 ? checked : checkedBg} alt="" />
              </div>
            </div>
            <button className="entry__content-btn" disabled={selected === null} onClick={() => setChangeWindow(false)}>Продолжить</button>
          </div>
        </div>
      </div> :
      <Welcome />
    }
    </>
  );
}

export default Entry;
