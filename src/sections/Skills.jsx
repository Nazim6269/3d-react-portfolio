import gsap from "gsap";
import { useEffect, useRef } from "react";
import SkillCard from "../components/SkillCard";

export default function Skills({ skills }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cards = track.children;

      const totalWidth = Array.from(cards).reduce(
        (acc, card) => acc + card.offsetWidth,
        0
      );

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -totalWidth / 2,
        duration: 50,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-10">
      <div
        ref={trackRef}
        className="flex gap-6 w-max"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
