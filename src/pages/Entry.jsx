import React, { useContext, useRef, useState } from "react";
import logo from "@i/group.svg";
import Welcome from "./Welcome";

import ButtonComponent from "../components/UI/ButtonComponent";
import { Context } from "../context/Context";

function Entry() {
  const [ changeWindow, setChangeWindow] = useState(true);
  const [ focusedState, setFocusedState] = useState(0)
  const { userlang, setUserLang } = useContext(Context);

  const ozLang = useRef();
  const rusLang = useRef();
  const enLang = useRef();

  const RC_UP = 38;
  const RC_DOWN = 40;
  const RC_ENTER = 13;

  function saveChoosenLang(value) {
    setUserLang(value);
  }
    
  function moveNext(keyCode, refBtn) {
    if (keyCode === RC_DOWN) {
      if (refBtn === ozLang) { rusLang.current.focus(); setUserLang(1); setFocusedState(1)}
      if (refBtn === rusLang) { enLang.current.focus(); setUserLang(2); setFocusedState(2)}
      if (refBtn === enLang) { ozLang.current.focus(); setUserLang(0); setFocusedState(0)}
    } else if (keyCode === RC_UP) {
      if (refBtn === ozLang) { enLang.current.focus(); setUserLang(2); setFocusedState(2)}
      if (refBtn === rusLang) { ozLang.current.focus(); setUserLang(0); setFocusedState(0)}
      if (refBtn === enLang) { rusLang.current.focus(); setUserLang(1); setFocusedState(1)}
    }
      if (keyCode === RC_ENTER) {
          setChangeWindow(false)
      }
    }

  // const RC_BACK = 10009;
  // const RC_EXIT = 10182;

  return (
    <>
      {changeWindow ? (
        <div className="entry">
          <div className="container">
            <div className="entry__content">
              <img src={logo} alt="logo" className="entry__content-img" />
              <h1 className="entry__content-title">
                {userlang === 0 && "Tilni tanlang"}
                {userlang === 1 && "Выберите язык приложения"}
                {userlang === 2 && "Choose the language"}
              </h1>
              {/* {document && document.referrer} */}
              <div className="entry__content-items">
                <label htmlFor="selectorLang" className="flex flex-col gap-y-[12px]">
                  <ButtonComponent title="uz" clickHandler={saveChoosenLang} langCode={0} pressHandler={moveNext} ref={ozLang} focusedState={focusedState} shuldBeFocused/>
                  <ButtonComponent title="ru" clickHandler={saveChoosenLang} langCode={1} pressHandler={moveNext} ref={rusLang} focusedState={focusedState}/>
                  <ButtonComponent title="eng" clickHandler={saveChoosenLang} langCode={2} pressHandler={moveNext} ref={enLang} focusedState={focusedState}/>
                  {/* <button
                    className={`entry__content-items-item ${userlang === 1 ? "selected" : ""
                      }`}
                    onClick={() => saveChoosenLang(1)}
                    onKeyDown={(e) => moveNext(e.keyCode, rusLang)}
                    ref={rusLang}
                  >
                    <input type="radio" name="selectorLang" checked={userlang === 1} onChange={() => { }} className="hidden" />
                    <p className="text-center">Русский</p>
                    <img src={userlang === 1 ? checked : checkedBg} alt="" />
                  </button>
                  <button
                    className={`entry__content-items-item  ${userlang === 2 ? "selected" : ""
                      }`}
                    onClick={() => saveChoosenLang(2)}
                    onKeyDown={(e) => moveNext(e.keyCode, enLang)}
                    ref={enLang}
                  >
                    <input type="radio" name="selectorLang" checked={userlang === 2} onChange={() => { }} className="hidden" />
                    <p>English</p>
                    <img src={userlang === 2 ? checked : checkedBg} alt="" />
                  </button> */}
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Welcome />
      )}
    </>
  );


}

export default Entry;

