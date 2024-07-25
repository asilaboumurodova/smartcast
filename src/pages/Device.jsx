import React, { useState } from 'react'
import logo from "@i/group.svg"
import vector from "@i/vector.svg"
import IntroVideo from './IntroVideo';
function Device() {
  const [open, setOpen] = useState(false);
  const [openNext, setOpenNext] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {openNext ? (
        <IntroVideo />
      ) : (
        <div className="device">
          <div className="container">
            <div className="device__content">
              <img src={logo} alt="" className="device__content-img" />
              <p className="device__content-info">Инструкции по использованию</p>
              <button className="device__content-buttons" onClick={toggleOpen}>Русский <img src={vector} alt="" /></button>
              {open && (
                <div className="device__content-menu">
                  <p>O’zbekcha</p>
                  <p>Русский</p>
                  <p>English</p>
                </div>
              )}
            </div>
            <div className="device__items">
              <h1 className="device__items-title">Добавление устройства</h1>
              <p className="device__items-text">Введите код</p>
              <div className="device__items-item">
                <p>q</p>
                <p>w</p>
                <p>3</p>
                <p>r</p>
                <p>R</p>
                <p>5</p>
              </div>
              <p className="device__items-text">на сайте</p>
              <button onClick={() => setOpenNext(true)} className="device__items-btn">smartcast.uz</button>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default Device
