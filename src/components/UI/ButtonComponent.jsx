import React, { useState, useRef, forwardRef } from "react";
import checkedBg from "@i/checkedBg.svg";
import checked from "@i/checked.svg";

const ButtonComponent =  forwardRef(({title, clickHandler, langCode, pressHandler, shuldBeFocused, focusedState}, ref) => { 
    return (
    <button ref={ref} 
    className={`entry__content-items-item ${ langCode === focusedState ? "selected" : "" }`}
    onClick={() => clickHandler(langCode)}
    onKeyDown={(e) => pressHandler(e.keyCode, ref)}
    autoFocus={shuldBeFocused}
>
    <input type="radio" name="selectorLang" checked={langCode === focusedState} onChange={() => { }} className="hidden" />
    <p className="text-center">{title}</p>
    <img src={langCode === focusedState ? checked : checkedBg} alt="" /> 
    </button>
  )
})

export default ButtonComponent


{/* <button
    className={`entry__content-items-item ${userlang === 0 ? "selected" : ""
        }`}
    onClick={() => saveChoosenLang(0)}
    onKeyDown={(e) => moveNext(e.keyCode, ozLang)}
    ref={ozLang}
    autoFocus
>
    <input type="radio" name="selectorLang" checked={userlang === 0} onChange={() => { }} className="hidden" />
    <p className="text-center">O’zbekcha</p>
    <img src={userlang === 0 ? checked : checkedBg} alt="" />
</button> */}
