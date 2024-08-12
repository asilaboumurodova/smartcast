import { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/flowers3.mp4";
import video2 from "../assets/videos/flowers2.mp4";
import video3 from "../assets/videos/flowers.mp4";
import Contact from "./Contact";
import classNames from "classnames";

const IntroVideo = () => {
  const [openNext, setOpenNext] = useState(false);
  // const [loading, setLoading] = useState(true);
  const player = useRef(null);
  // const videos = [video1, video2, video3];
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  // useEffect(() => {
  //   if (player.current) {
  //     setLoading(true);  
  //     player.current.src = videos[currentVideoIndex];
  //     player.current.load();
  //   }
  // }, [currentVideoIndex]);

  // const handleVideoEnd = () => {
  //   if (currentVideoIndex < videos.length - 1) {
  //     setCurrentVideoIndex(currentVideoIndex + 1);
  //   } else {
  //     setOpenNext(true);
  //   }
  // };

const [ended, setEnded] = useState(false);

  return (
    <>
      {openNext ? (
        <Contact />
      ) : (
        <div className="h-full w-full relative flex justify-center items-center">
          {/* {loading && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="loader"></div>
        </div>
      )} */}
          <div className="w-[600px] h-[600px] overflow-x-hidden flex justify-center items-center">
            <div className={classNames("flex", { "-translate-x-[600px]" : !ended, "" : ended, } )}>

              <video
                ref={player}
                className="h-[600px] w-[600px]"
                onEnded={() => {setOpenNext(true)}}
              >
                <source src={video3} />
              </video>

              <video
                // ref={player}
                autoPlay
                className="w-[600px] h-[600px]"
                onEnded={() => {player.current.play(); setEnded(true)}}
              >
                <source src={video2} />
              </video>

            </div>
          </div>

        </div>
      )}
    </>

  );
};

export default IntroVideo;





