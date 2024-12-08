import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const AnimatedTittle = ({ title, sectionClass }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tittleAnimation = gsap.timeline({
        ScrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleAction: "play none none reverse",
        },
      });
      tittleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className={`animated-title ${sectionClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

AnimatedTittle.propTypes = {
  title: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
};

export default AnimatedTittle;
