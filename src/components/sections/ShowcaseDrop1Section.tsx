import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import imgBFFBlack from "@assets/d3efa852-813a-43f6-bc6e-2a8d2b737f6c_1781286527273.png";
import imgBFFOffWhite from "@assets/33ef5afe-ec2a-405c-be2f-c4786d17960c_1781286522480.png";
import imgBFFBurgundy from "@assets/7caf832d-63cd-48b2-a49c-12b82cd814e0_1781286888023.png";
import imgBTBLBlack from "@assets/9d3a0bd0-d738-48f1-be9b-3e9651f9fcc3_1781286532075.png";
import imgBTBLWhite from "@assets/6d2a65d8-3515-4327-8674-8f989f695ad6_1781286536554.png";
import imgBlackout from "@assets/WhatsApp_Image_2026-06-12_at_5.33.58_PM_(1)_1781286541601.jpg";

const images = [
  { src: imgBFFBlack,    name: "Born From Fire — Black" },
  { src: imgBFFOffWhite, name: "Born From Fire — Off White" },
  { src: imgBFFBurgundy, name: "Born From Fire — Burgundy" },
  { src: imgBTBLBlack,   name: "Born To Be Loud — Black" },
  { src: imgBTBLWhite,   name: "Born To Be Loud — White" },
  { src: imgBlackout,    name: "Blackout Collection" },
];

export default function ShowcaseDrop1Section() {
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
    <section className="relative py-24 md:py-36 bg-[#0A0A0A] border-t border-border/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Drop 001 — 360 View</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase">Experience Every Detail.</h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide">Drop 001 — Born From Fire. Premium quality. See it from every angle.</p>
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
