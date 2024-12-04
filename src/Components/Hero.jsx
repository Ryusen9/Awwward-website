import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const nextVdRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  useGSAP(() => {
    if(hasClicked) {
        gsap.set('#next-video', {visibility: 'visible'});
        gsap.to('#next-video', {
            transformOrigin: 'center center',
            duration: 1,
            scale: 1,
            width: '100%',
            height: '100%',
            ease: 'power1.inOut',
            onStart: () => nextVdRef.current.play(),
        })
        gsap.from('#current-video', {
            transformOrigin: 'center center',
            duration: 1,
            scale: 0,
            ease: 'power1.inOut',
        })
    }
  }, {dependencies:[currentIndex], revertOnUpdate: true})
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 overflow-hidden rounded-lg size-64 cursor-pointer">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(upcomingVideoIndex)}
                ref={nextVdRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              ></video>
            </div>
          </div>
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible z-20 absolute size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          ></video>
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          ></video>
        </div>
        <h1 className="special-font absolute bottom-5 right-5 hero-heading z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="font-robert-regular mb-5 max-w-64 text-blue-100">
              Enter the MetaGame Layer, <br /> Unleash the play economy.
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font absolute bottom-5 right-5 hero-heading z-40 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
