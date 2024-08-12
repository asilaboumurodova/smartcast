import React, { forwardRef } from "react";
import classNames from "classnames";

const ButtonComponent =  forwardRef(({title, clickHandler, langCode, pressHandler, shouldBeFocused, focusedState}, ref) => { 
  const checked = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="#EE417D"/>
  <path d="M9.82424 15.0019L7.36368 12.7028C7.08951 12.4466 6.65364 12.4466 6.37946 12.7028C6.10528 12.959 6.10528 13.3663 6.37946 13.6224L9.3251 16.3747C9.59927 16.6309 10.0422 16.6309 10.3163 16.3747L16.7939 9.48673C17.0681 9.23056 17.0681 8.8233 16.7939 8.56712C16.5198 8.31095 16.0839 8.31095 15.8097 8.56712L9.82424 15.0019Z" fill="white"/>
  </svg>

const checkedBg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#E3E5E6"/>
</svg>

    return (
    <button ref={ref} 
    className={classNames(
      "flex items-center justify-between p-[10px] rounded-[12px] bg-[#F2F7FD] w-[300px] focus:border-solid border-2 border-[#EE417D]",
      "entry__content-items-item",
      { "selected": langCode === focusedState }
    )}
    onClick={() => clickHandler(langCode)}
    onKeyDown={(e) => pressHandler(e.keyCode, ref)}
    autoFocus={shouldBeFocused}
>
    <input type="radio" name="selectorLang" checked={langCode === focusedState} onChange={() => { }} className="hidden" />
    <p className="text-center">{title}</p>
    {langCode === focusedState ? checked : checkedBg} 
    </button>
  )
})

export default ButtonComponent
