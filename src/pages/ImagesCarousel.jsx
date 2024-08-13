import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import roseImg from "@i/rose.jpg";
import lilyImg from "@i/lilies.jpg";

const ImagesCarousel = () => {
  const [openNext, setOpenNext] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [roseImg, lilyImg];

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const RC_ENTER = 13;
  const RC_RIGHT = 39;
  const RC_LEFT = 37;

  const btn = useRef();
  const rotateBtn = useRef();
  function changeFocus(elem, keyCode) {
    if (keyCode === RC_ENTER) {
      if (elem === btn) {
        setOpenNext(true);
      }
      if (elem === rotateBtn) {
        handleRotate();
      }
    }
    if (keyCode === RC_RIGHT) {
      if (elem === rotateBtn) {
        btn.current.focus();
      }
    }
    if (keyCode === RC_LEFT) {
      if (elem === btn) {
        rotateBtn.current.focus();
      }
    }
  }

  return (
    <>
      {openNext ? (
        <Contact />
      ) : (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="h-full w-full max-w-[800px] max-h-[800px] relative flex flex-col gap-[20px] justify-center items-center my-0 mx-auto">
            <div className="w-[800px] h-[800px] overflow-hidden flex justify-end items-center">
              <div
                id="img__content"
                className="flex"
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s' }}
              >
                <img src={images[currentImage]} alt="" className="w-[800px] h-[800px]" />
              </div>
            </div>

            <div className="flex justify-between items-center gap-[20px] rota">
              <button
                ref={rotateBtn}
                autoFocus
                onKeyDown={(e) => { changeFocus(rotateBtn, e.keyCode); }}
                className="bg-[#EE417D] py-[13px] px-[32px] rounded-[12px] text-[white] font-medium text-[17px] text-center focus:border-solid border-2 border-[black]"
              >
                press to rotate image
              </button>
              <button
                ref={btn}
                onKeyDown={(e) => { changeFocus(btn, e.keyCode); }}
                className="bg-[#EE417D] py-[13px] px-[32px] rounded-[12px] text-[white] font-medium text-[17px] text-center focus:border-solid border-2 border-[black]"
              >
                press to open next page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagesCarousel;






