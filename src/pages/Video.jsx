import React, { useState, useRef } from 'react'
import Contact from './Contact'
import video from "@/assets/videos/flowers2.mp4"

function Video() {
    const [openNext, setOpenNext] = useState(false);
    const [volume, setVolume] = useState(tizen.tvaudiocontrol.getVolume())

    function increaseVolume() {
        console.log("a")
        tizen.tvaudiocontrol.setVolume(tizen.tvaudiocontrol.getVolume() + 1)  
        setVolume(prev => prev + 1)
      }
      
      function decreaseVolume() {
        console.log("a")
        tizen.tvaudiocontrol.setVolume(tizen.tvaudiocontrol.getVolume() - 1)  
        setVolume(prev => prev - 1)
      }

      const RC_ENTER = 13;
      const RC_RIGHT = 39;
      const RC_LEFT = 37;
      const RC_UP = 38;
      const RC_DOWN = 40;

      const incVol = useRef();
      const decVol = useRef();
      const btn = useRef();
      

      function changeFocus(elem, keyCode) {
        if (keyCode === RC_ENTER) {
            if (elem === btn) { setOpenNext(true) }
            if (elem === incVol) { increaseVolume() }
            if (elem === decVol) { decreaseVolume() }
        }

        if (keyCode === RC_UP) {
            if (elem === btn) { incVol.current.focus() }
            if (elem === incVol) { btn.current.focus() }
            if (elem === decVol) { btn.current.focus() }
        } 

        if (keyCode === RC_DOWN) {
            if (elem === btn) { decVol.current.focus() }
            if (elem === incVol) { btn.current.focus() }
            if (elem === decVol) { btn.current.focus() }
        } 

        if (keyCode === RC_RIGHT) {
          if (elem === incVol) { decVol.current.focus() }
          if (elem === decVol) { incVol.current.focus() }
        }
    
        if (keyCode === RC_LEFT) {
          if (elem === decVol) { incVol.current.focus() }
          if (elem === incVol) { decVol.current.focus() }
        }
    }

    
    return (
        <>
            {openNext ? (
                <Contact />
            ) : (
                <div className="flex justify-center items-center flex-col min-h-screen">
                    <video className="w-[1000px] h-[1000-px]" autoPlay loop src={video}></video>
                    <div className="flex flex-row gap-[10px] justify-center items-center p-[30px]">
                    <button ref={incVol} onKeyDown={(e) => { changeFocus(incVol, e.keyCode) }} className="bg-[#EE417D] p-[10px] rounded-[12px] text-[white] font-medium text-[17px] text-center focus:border-solid border-2 border-[black]">+</button>
                    <p className="font-bold text-[20px] border-solid border-2 border-[#EE417D] p-[4px] rounded-[12px] text-[black]">{volume}</p>
                    <button ref={decVol} onKeyDown={(e) => { changeFocus(decVol, e.keyCode) }} className="bg-[#EE417D] p-[10px] rounded-[12px] text-[white] font-medium text-[17px] text-center focus:border-solid border-2 border-[black]">-</button>
                    </div>
                    <button ref={btn} autoFocus onKeyDown={(e) => { changeFocus(btn, e.keyCode) }} className="bg-[#EE417D] py-[13px] px-[32px] rounded-[12px] text-[white] font-medium text-[17px] text-center focus:border-solid border-2 border-[black]">smartcast.uz</button>
                </div>
            )}
        </>
    );
}

export default Video
