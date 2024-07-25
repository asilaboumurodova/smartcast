
import { useRef, useState } from "react";
import video from "../assets/videos/flowers.mp4"
import Contact from "./Contact";

const IntroVideo = () => {
  const player = useRef(null);
  const [openNext, setOpenNext] = useState(false);
  return (
    <>
      {openNext ? (<Contact />) : (
        <div className="flex flex-col p-[40px] w-full justify-center items-center gap-y-[20px]">
          <video ref={player} controls className="rounded-[32px] h-[620px]">
            <source src={video} />
          </video>
          <button onClick={() => setOpenNext(true)} className="device__items-btn">smartcast.uz</button>
        </div>
      )}
    </>
  );
};

export default IntroVideo;

