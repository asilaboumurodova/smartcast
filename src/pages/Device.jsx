import React, { useState, useContext, useRef, useEffect } from 'react'
import logo from "@i/group.svg"
import IntroVideo from './IntroVideo';
import vector from "@i/vector.svg"
import { Context } from "../context/Context";
import { start } from '../api';

function Device() {
  const [openNext, setOpenNext] = useState(false);
  const [langSelector, setLangSelector] = useState(false);
  const { userlang, setUserLang } = useContext(Context)
  const [openInstr, setOpenInstr] = useState(false);

  const RC_ENTER = 13;
  const RC_UP = 38;
  const RC_DOWN = 40;
  const RC_RIGHT = 39;
  const RC_LEFT = 37;
  const RC_BACK = 10009;

  const select = useRef();
  const btn = useRef();
  const ozRef = useRef();
  const ruRef = useRef();
  const enRef = useRef();
  const instruction = useRef();

  function changeFocus(elem, keyCode) {
    if (keyCode === RC_UP) {
      if (elem === btn) { select.current.focus() }
      if (elem === select) { langSelector ? enRef.current.focus() : btn.current.focus() }
      if (elem === ozRef) { enRef.current.focus() }
      if (elem === ruRef) { ozRef.current.focus() }
      if (elem === enRef) { ruRef.current.focus() }
    }

    if (keyCode === RC_DOWN) {
      if (elem === btn) { select.current.focus() }
      if (elem === select) { langSelector ? ozRef.current.focus() : btn.current.focus() }
      if (elem === ozRef) { ruRef.current.focus() }
      if (elem === ruRef) { enRef.current.focus() }
      if (elem === enRef) { ozRef.current.focus() }
      if (elem === instruction) { btn.current.focus() }
    }

    if (keyCode === RC_ENTER) {
      if (elem === btn) { setOpenNext(true) }
      if (elem === select) { setLangSelector(prev => !prev) }
      if (elem === ozRef) { setUserLang(0); setLangSelector(false); select.current.focus() }
      if (elem === ruRef) { setUserLang(1); setLangSelector(false); select.current.focus() }
      if (elem === enRef) { setUserLang(2); setLangSelector(false); select.current.focus() }
      if (elem === instruction) { setOpenInstr(prev => !prev); }
    }

    if (keyCode === RC_LEFT) {
      if (elem === instruction) {
        select.current.focus()
      }
      if (elem === select) {
        instruction.current.focus()
      }
    }

    if (keyCode === RC_RIGHT) {
      if (elem === instruction) {
        select.current.focus()
      }
    }

    if (keyCode === RC_BACK) {
      if (elem === select) {
        setLangSelector(false); 
      }
      if (elem === ozRef) { setLangSelector(false); select.current.focus()}
      if (elem === ruRef) { setLangSelector(false); select.current.focus() }
      if (elem === enRef) { setLangSelector(false); select.current.focus() }
    }
  }

  const [deviceCode, setDeviceCode] = useState('');
  useEffect(() => {
    start(setDeviceCode);
  }, []);

  console.log(deviceCode.deviceToken)


  return (
    <>
      {openNext ? (
        <IntroVideo />
      ) : (
        <div className="device">
          <div className="container">
            <div className="device__content">
              <img src={logo} alt="" className="device__content-img" />
              <div className="device__content-items">
                <div className="flex flex-row relative">
                <button ref={instruction} onKeyDown={(e) => { changeFocus(instruction, e.keyCode) }} className="device__content-info">
                  {userlang === 0 && "Ishlatish uchun instruksiya"}
                  {userlang === 1 && "Инструкции по использованию"}
                  {userlang === 2 && "Instructions for use"}</button>
                {
                  openInstr &&
                  <div className='absolute translate-x-[40%] translate-y-[10%]'>
                    <iframe
                      id="inlineFrameExample"
                      sandbox='allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation'
                      width="400"
                      height="800"
                      src="https://furniture-shop-42eq.vercel.app/">
                    </iframe>
                  </div>
                }
                </div>
                <button ref={select} onKeyDown={(e) => changeFocus(select, e.keyCode)} className='flex flex-row items-center gap-x-[5px] bg-slate-100 p-[10px] rounded-[12px] focus:border-solid border-2 border-black'>
                  {userlang === 0 ? "O'zbekcha" :
                  userlang === 1 ? 'Русский' :
                  userlang === 2 ? 'English' :
                  ''}
                  <img src={vector} alt="" />
                </button>
                {langSelector &&
                  <div className='flex flex-col absolute right-[15%] top-[10%] bg-slate-100 p-[12px] rounded-[12px] focus:border-solid border-2 border-black'>
                    <button className='focus:bg-slate-200 rounded-[12px] p-[10px]' ref={ozRef} onKeyDown={(e) => { changeFocus(ozRef, e.keyCode) }}>O'zbekcha</button>
                    <button className='focus:bg-slate-200 rounded-[12px] p-[10px]' ref={ruRef} onKeyDown={(e) => { changeFocus(ruRef, e.keyCode) }}>Русский</button>
                    <button className='focus:bg-slate-200 rounded-[12px] p-[10px]' ref={enRef} onKeyDown={(e) => { changeFocus(enRef, e.keyCode) }}>English</button>
                  </div>
                }
              </div>
            </div>
            <div className="device__items">
              <h1 className="device__items-title">
                {userlang === 0 && "Qurilmani qo'shish"}
                {userlang === 1 && "Добавление устройства"}
                {userlang === 2 && "Add device"}
              </h1>
              <p className="device__items-text">
                {userlang === 0 && "Kodni kiriting"}
                {userlang === 1 && "Введите код"}
                {userlang === 2 && "Write the code"}
              </p>
              <div className="device__items-item">
              {deviceCode && deviceCode.deviceToken.split('').map((token, index)=>{
                  return (
                    <p key={index}>{token}</p>
                  );
                })}
              </div>
              <p className="device__items-text">
                {userlang === 0 && "saytda"}
                {userlang === 1 && "на сайте"}
                {userlang === 2 && "in site"}
              </p>
              <button ref={btn} autoFocus onKeyDown={(e) => { changeFocus(btn, e.keyCode) }} className="device__items-btn">smartcast.uz</button>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default Device
