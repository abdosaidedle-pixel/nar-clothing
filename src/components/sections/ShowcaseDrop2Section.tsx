import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import imgDoYouMissMeBlack from "@assets/drop2-do-you-miss-me-black.jpg";
import imgDoYouMissMeBoneWhite from "@assets/drop2-do-you-miss-me-bone-white.jpg";
import imgNarBasicBoneWhite from "@assets/drop2-nar-basic-bone-white.jpg";
import imgStatementPieceBoneWhite from "@assets/drop2-statement-piece-bone-white.jpg";
import imgLoveExamVintageBlack from "@assets/drop2-love-exam-vintage-black.jpg";
import imgLoveExamBurgundy from "@assets/drop2-love-exam-burgundy.jpg";

const images = [
  { src: imgDoYouMissMeBlack,       name: "Do You Miss Me? — Black" },
  { src: imgDoYouMissMeBoneWhite,   name: "Do You Miss Me? — Bone White" },
  { src: imgNarBasicBoneWhite,      name: "NAR Basic — Bone White" },
  { src: imgStatementPieceBoneWhite, name: "Statement Piece — Bone White" },
  { src: imgLoveExamVintageBlack,   name: "Love Exam — Vintage Black" },
  { src: imgLoveExamBurgundy,       name: "Love Exam — Burgundy" },
];

export default function ShowcaseDrop2Section() {
  const [active, setActive] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const rotateY = useSpring(mouseX, { stiffness: 80, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 20);
    mouseY.set(-(y / 20));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative py-24 md:py-36 bg-black border-t border-border/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Drop 002 — 360 View</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase">Experience Every Detail.</h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide">Drop 002 — Wear What They Think About. Premium quality. See it from every angle.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center max-w-5xl mx-auto">
          <div
            className="relative aspect-[3/4] max-w-sm mx-auto w-full"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="w-full h-full relative"
              transition={{ type: "spring" }}
            >
              <div className="relative w-full h-full">
                {images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img.src}
                    alt={img.name}
                    animate={{ opacity: i === active ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover border border-white/5 shadow-2xl"
                    style={{ pointerEvents: "none" }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-2xl text-foreground uppercase">{images[active].name}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-0.5">Hover to rotate</p>
              </div>
            </motion.div>
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </div>

          <div className="flex lg:flex-col gap-3 justify-center overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 overflow-hidden transition-all duration-300 ${
                  active === i ? "border-primary shadow-lg shadow-primary/20" : "border-white/10 opacity-50 hover:opacity:80"
                }`}
              >
                <img src={img.src} alt={img.name} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
